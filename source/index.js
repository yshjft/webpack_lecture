//entry file

import hello_word from "./hello.js"
import world_word from "./world.js"
import css from './style.css';
//모듈이 필요하면 여기에 추가하면 된다.

document.getElementById('root').innerHTML = hello_word+' '+world_word;
console.log('css', css);