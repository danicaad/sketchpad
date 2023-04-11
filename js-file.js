function generateGrid(n) {    
    for (let i = 0; i < (n*n); i++) {
        const box = document.createElement('div');
        box.classList.add("box");
        box.style.width = `${530/n}px`;
        box.style.height = `${530/n}px`;        
        div.appendChild(box);
     }

    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => box.addEventListener("mousedown", () => {
        box.classList.add("hovered");
    }));
    boxes.forEach((box) => box.addEventListener("mouseover", draw));

    clear.addEventListener("click", () => {
        boxes.forEach((box) => box.classList.remove("hovered"));
    });
}
    
function draw(e) {
    if(isMouseDown && e.type == "mouseover") {
        e.target.classList.add("hovered");
    }
}

let isMouseDown = false;
document.getElementById("container").onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;
document.body.addEventListener("dragstart", (event) => {
    event.preventDefault();
});

const div = document.querySelector('#container');
const input = document.querySelector('#input');
const clear = document.querySelector('#clear');

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