function generate(){
    document.getElementById('poem-title').innerHTML = generate_lines(1);
    document.getElementById('poem').innerHTML = generate_lines(random_number(23) + 1);
}

function generate_lines(number_of_lines){
    var block = '';
    var capitalize = true;
    var consonants = 'bcdfghjklmnpqrstvwxyz';
    var lines = '';
    var number_of_letters = 0;
    var number_of_words = 0;
    var stanza = number_of_lines > 1
      ? .1
      : 0;
    var vowels = 'aeiou';

    while(number_of_lines > 0){
        capitalize = true;
        number_of_words = random_number(10) + 1;

        while(number_of_words > 0){
            number_of_letters = random_number(5) + 1;

            if(Math.random() < .1){
                capitalize = true;
            }

            while(number_of_letters > 0){
                block = consonants[random_number(21)]
                  + vowels[random_number(5)];

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

            if(number_of_words > 1){
                lines += ' ';
            }

            number_of_words--;
        }

        lines += '.<br>';

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
