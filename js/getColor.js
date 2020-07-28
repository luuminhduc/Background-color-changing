import {getRandomNumber} from './getRandomNumber.js';

export function getColor() {
    return [getRandomNumber(), getRandomNumber(), getRandomNumber()];
}