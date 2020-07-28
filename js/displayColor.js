export function displayColor(a, b, c) {
    const container = document.querySelector('.container');
    const colorEl = document.querySelector('.color');
    container.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    colorEl.innerText = `rgb(${a}, ${b}, ${c})`;
}