function generate(){
    document.getElementById('poem-author').innerHTML = generate_lines(1, false, 3);
    document.getElementById('poem-title').innerHTML = generate_lines(1, false);
    document.getElementById('poem').innerHTML = generate_lines(random_number(23) + 1);
}

function generate_lines(number_of_lines, line, maximum_words_per_line){
    var block = '';
    var capitalize = true;
    var consonants = 'bcdfghjklmnpqrstvwxyz';
    var lines = '';
    maximum_words_per_line = maximum_words_per_line || 10;
    var number_of_letters = 0;
    var number_of_words = 0;
    var punctuation = '?!';
    var special = 'áäčďěíňóůöřšťúüýž';
    var stanza = number_of_lines > 1
      ? .1
      : 0;
    var vowels = 'aeiou';

    if(line == undefined){
        var line = true;
    }

    while(number_of_lines > 0){
        capitalize = true;
        number_of_words = random_number(maximum_words_per_line) + 1;

        while(number_of_words > 0){
            number_of_letters = random_number(5) + 1;

            // Things that aren't lines are capitalized
            //   or chance for first letter of word to be capitalized.
            if(!line
              || Math.random() < .1){
                capitalize = true;
            }

            while(number_of_letters > 0){
                block = consonants[random_number(consonants.length)];

                if(Math.random() < .05){
                    block += special[random_number(special.length)];

                }else{
                    block += vowels[random_number(vowels.length)];
                }

                // Random chance to have vowel before consonant.
                if(Math.random() < .3){
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
            var added = false;

            for(var id in punctuation){
                if(Math.random() < .1){
                    lines += punctuation[id];
                    added = true;
                    break;
                }
            }

            if(!added){
                lines += '.';
            }
        }

        lines += '<br>';

        // Chance of new stanza.
        if(stanza > Math.random()){
            lines += '<br>';
        }

        number_of_lines--;
    }

    return lines;
}

function random_number(i){
    return Math.floor(Math.random() * i);
}

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // Enter: generate()
    if(key === 13){
        generate();
    }
};

window.onload = generate;
