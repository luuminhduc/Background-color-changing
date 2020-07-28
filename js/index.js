const btn = document.querySelector('.btn');
const colorEl = document.querySelector('.color');

import {getColor} from './getColor.js';
import {displayColor} from './displayColor.js';

let a,b,c;

btn.addEventListener('click', (e) => {
    [a,b,c] = getColor();
    displayColor(a,b,c);
})

function start() {
    [a,b,c] = getColor();
    displayColor(a,b,c);
}

start();

// setInterval(() => {
//     start();
// }, 500);