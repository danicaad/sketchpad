function generateGrid(n) {
    for (let i = 0; i < (n*n); i++) {
        const box = document.createElement('div');
        box.classList.add("box");
        box.style.width = `${530/n}px`;
        box.style.height = `${530/n}px`;
        div.appendChild(box);
     }
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => box.addEventListener("mouseover", () => {
        box.classList.add("hovered");
    }));
}

const div = document.querySelector('#container');
const input = document.querySelector('#input');

let n = 16;

generateGrid(n);

input.addEventListener("click", () => {
    while(div.firstChild) {
        div.removeChild(div.lastChild);
    }
    do{
        n = prompt('How many number of squares per side? (default: 16, max: 100)');
    } while (n > 100);

    generateGrid(n);
});