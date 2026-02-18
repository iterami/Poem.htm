'use strict';

function generate(){
    const author = generate_lines(1, false, 3);
    const title = generate_lines(1, false);

    core_ui_update({
      'ids': {
        'poem-author': author,
        'poem-title': title,
      },
    });
    document.title = title + ' -by- ' + author + ' - Poem.htm';
    core_elements.poem.innerHTML = generate_lines(core_random_integer(23) + 1);
}

function generate_lines(number_of_lines, line, maximum_words_per_line){
    let capitalize = true;
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    let lines = '';
    maximum_words_per_line = maximum_words_per_line || 10;
    let number_of_letters = 0;
    let number_of_words = 0;
    const punctuation = '?!';
    const rare = '\'';
    const special = 'áäčďěíňóůöřšťúüýž';
    const vowels = 'aeiou';

    if(line === void 0){
        line = true;
    }

    while(number_of_lines > 0){
        capitalize = true;
        number_of_words = core_random_integer(maximum_words_per_line) + 1;

        while(number_of_words > 0){
            number_of_letters = core_random_integer(5) + 1;

            if(!line
              || core_random_boolean(.1)){
                capitalize = true;
            }

            while(number_of_letters > 0){
                let block = consonants[core_random_integer(consonants.length)];

                if(core_random_boolean(.01)){
                    block += rare[core_random_integer(rare.length)];

                }else if(core_random_boolean(.05)){
                    block += special[core_random_integer(special.length)];

                }else{
                    block += vowels[core_random_integer(vowels.length)];
                }

                if(core_random_boolean(.3)){
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

            if(number_of_words > 1){
                lines += ' ';
            }

            number_of_words--;
        }

        if(line){
            let added = false;

            for(const id in punctuation){
                if(core_random_boolean(.1)){
                    lines += punctuation[id];
                    added = true;
                    break;
                }
            }

            if(!added){
                lines += '.';
            }

            lines += '<br>';

            if(number_of_lines > 1){
                if(core_random_boolean(.1)){
                    lines += '<br>';
                }
            }
        }

        number_of_lines--;
    }

    return lines;
}

function repo_init(){
    core_repo_init({
      'events': {
        'generate': {
          'onclick': generate,
        },
      },
      'keybinds': {
        'Enter': {
          'down': generate,
        },
      },
      'title': 'Poem.htm',
      'ui': '<button id=generate type=button>Generate</button>',
      'ui_elements': [
        'poem',
      ],
    });

    generate();
}
