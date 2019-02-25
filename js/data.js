'use strict';

function generate(){
    let author = generate_lines(1, false, 3);
    let title = generate_lines(1, false);

    document.getElementById('poem-author').innerHTML = author;
    document.getElementById('poem-title').innerHTML = title
    document.title = title + ' -by- ' + author + ' - Poem.htm';
    document.getElementById('poem').innerHTML = generate_lines(core_random_integer({
      'max': 23,
    }) + 1);
}

function generate_lines(number_of_lines, line, maximum_words_per_line){
    let capitalize = true;
    let consonants = 'bcdfghjklmnpqrstvwxyz';
    let lines = '';
    maximum_words_per_line = maximum_words_per_line || 10;
    let number_of_letters = 0;
    let number_of_words = 0;
    let punctuation = '?!';
    let rare = '\'';
    let special = 'áäčďěíňóůöřšťúüýž';
    let vowels = 'aeiou';

    if(line == void 0){
        line = true;
    }

    while(number_of_lines > 0){
        capitalize = true;
        number_of_words = core_random_integer({
          'max': maximum_words_per_line,
        }) + 1;

        while(number_of_words > 0){
            number_of_letters = core_random_integer({
              'max': 5,
            }) + 1;

            // Things that aren't lines are capitalized
            //   or chance for first letter of word to be capitalized.
            if(!line
              || core_random_boolean({
                'chance': .1,
              })){
                capitalize = true;
            }

            while(number_of_letters > 0){
                let block = consonants[core_random_integer({
                  'max': consonants.length,
                })];

                if(core_random_boolean({
                    'chance': .01,
                  })){
                    block += rare[core_random_integer({
                      'max': rare.length,
                    })];

                }else if(core_random_boolean({
                    'chance': .05,
                  })){
                    block += special[core_random_integer({
                      'max': special.length,
                    })];

                }else{
                    block += vowels[core_random_integer({
                      'max': vowels.length,
                    })];
                }

                // Random chance to have vowel before consonant.
                if(core_random_boolean({
                    'chance': .3,
                  })){
                    block = block.split('').reverse().join('');
                }

                if(capitalize){
                    capitalize = false;

                    block = block[0].toUpperCase()
                      + block[1];
                }

                lines += block;
                number_of_letters--;
            }

            // If not last word, add a space.
            if(number_of_words > 1){
                lines += ' ';
            }

            number_of_words--;
        }

        // Only add punctuation to lines.
        if(line){
            let added = false;

            for(let id in punctuation){
                if(core_random_boolean({
                    'chance': .1,
                  })){
                    lines += punctuation[id];
                    added = true;
                    break;
                }
            }

            if(!added){
                lines += '.';
            }

            lines += '<br>';

            // Chance of new stanza if multiple lines.
            if(number_of_lines > 1){
                if(core_random_boolean({
                    'chance': .1,
                  })){
                    lines += '<br>';
                }
            }
        }

        number_of_lines--;
    }

    return lines;
}
