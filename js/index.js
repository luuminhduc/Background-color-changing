const btn = document.querySelector('.btn-change');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');

import {getColor} from './getColor.js';
import {displayColor} from './displayColor.js';

let hasInterval = true;

let a,b,c;

btn.addEventListener('click', (e) => {
    changeColor()
})

btnStart.addEventListener('click', (e) => {
    document.querySelector('.container').classList.remove('active');
    hasInterval = true;
    repeatedColorChange();
})

btnStop.addEventListener('click', (e) => {
    document.querySelector('.container').classList.add('active');
    hasInterval = false;
})

function changeColor() {
    [a,b,c] = getColor();
    displayColor(a,b,c);
}

function repeatedColorChange() {
    if(hasInterval == true) {
        [a,b,c] = getColor();
        displayColor(a,b,c);
        setTimeout(() => {
            repeatedColorChange();
        }, 500)
    }
}

repeatedColorChange();

