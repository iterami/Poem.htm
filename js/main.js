'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'generate': {
          'onclick': core_repo_reset,
        },
      },
      'info': '<input id=generate type=button value=Generate>',
      'keybinds': {
        13: {
          'todo': generate,
        },
      },
      'reset': generate,
      'title': 'Poem.htm',
    });

    generate();
}
