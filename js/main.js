'use strict';

function repo_init(){
    core_repo_init({
      'info': '<input id=generate type=button value="Generate [ENTER]">',
      'keybinds': {
        13: {
          'todo': generate,
        },
      },
      'title': 'Poem.htm',
    });

    generate();

    document.getElementById('generate').onclick = function(){
        generate();
        core_escape();
    };
}
