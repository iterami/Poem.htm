function generate(){
    document.getElementById('poem-title').innerHTML = generate_lines(1);
    document.getElementById('poem').innerHTML = generate_lines(random_number(10) + 1);
}

function generate_lines(number_of_lines){
    var capitalize = true;
    var consonants = 'bcdfghjklmnpqrstvwxyz';
    var vowels = 'aeiou';
    var lines = '';
    var number_of_letters = 0;
    var number_of_words = 0;

    while(number_of_lines > 0){
        capitalize = true;
        number_of_words = random_number(10) + 1;

        while(number_of_words > 0){
            number_of_letters = random_number(5) + 1;

            while(number_of_letters > 0){
                if(capitalize){
                    lines += consonants[random_number(21)].toUpperCase();
                    capitalize = false;

                }else{
                    lines += consonants[random_number(21)];
                }

                lines += vowels[random_number(5)];

                number_of_letters--;
            }

            if(number_of_words > 1){
                lines += ' ';
            }

            number_of_words--;
        }

        lines += '.<br>';
        number_of_lines--;
    }

    return lines;
}

function random_number(i){
    return Math.floor(Math.random() * i);
}

window.onload = generate;
