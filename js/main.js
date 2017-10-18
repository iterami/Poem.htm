'use strict';

function repo_init(){
    core_repo_init({
      'info': '<input id=generate type=button value="Generate [ENTER]">',
      'info-events': {
        'generate': {
          'todo': function(){
              generate();
              core_escape();
          },
        },
      },
      'keybinds': {
        13: {
          'todo': generate,
        },
      },
      'title': 'Poem.htm',
    });

    generate();
}
