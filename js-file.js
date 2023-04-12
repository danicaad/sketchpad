function generateGrid(n) {    
    for (let i = 0; i < (n*n); i++) {
        const box = document.createElement('div');
        box.classList.add("box");
        box.style.width = `${530/n}px`;
        box.style.height = `${530/n}px`;        
        div.appendChild(box);
     }

    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => box.addEventListener("mousedown", draw));
    boxes.forEach((box) => box.addEventListener("mouseover", draw));

    clearBtn.addEventListener("click", () => {
        boxes.forEach((box) => box.style.backgroundColor = "#F7F5EB");
    });
}
    
function draw(e) {
    if ((isMouseDown && e.type == "mouseover") || (e.type == "mousedown")) {
        if (currentMode === "normal") {        
            e.target.style.backgroundColor = `rgb(89, 89, 89)`;
        } else if (currentMode === "rainbow") {       
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            e.target.style.backgroundColor = `rgb(${red},${green},${blue}, 0.4)`;
        } else if (currentMode === "sketch") {            
            let bgColor = e.target.style.backgroundColor;
            let alphaIndex = bgColor.search(/0.\d/);
            let alphaValue = parseFloat(bgColor.substr(alphaIndex, 3));
            let newAlpha = alphaValue + 0.1;

            if (newAlpha != 1) {
                e.target.style.backgroundColor = `rgb(89, 89, 89, 0.1)`;
                if (alphaIndex > 0) {
                    e.target.style.backgroundColor = `rgb(89, 89, 89,${newAlpha})`;
                }
            }
        } else if (currentMode === "eraser") {
            e.target.style.backgroundColor = "#F7F5EB";     
        }    
    }
}

let isMouseDown = false;
const drawMode = ["normal","rainbow","sketch","eraser"];
let currentMode = "normal";

document.getElementById("container").onmousedown = () => isMouseDown = true;
document.body.onmouseup = () => isMouseDown = false;
document.body.addEventListener("dragstart", (event) => {
    event.preventDefault();
});

const div = document.querySelector('#container');
const inputBtn = document.querySelector('#input');
const normalBtn = document.querySelector('#normal');
const rainbowBtn = document.querySelector('#rainbow')
const sketchBtn = document.querySelector('#sketch');
const eraserBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');

let n = 16;
generateGrid(n);

//Set Grid Size Button
inputBtn.addEventListener("click", () => {
    do{
        n = prompt('How many number of squares per side? (default: 16, max: 100)');
    } while (n > 100);

    if (n != null){
        while(div.firstChild) {
            div.removeChild(div.lastChild);
        }
    }

    generateGrid(n);
});

//Normal Mode Button
normalBtn.addEventListener("click", () => {
    currentMode = drawMode[0];
});
//Rainbow Mode Button
rainbowBtn.addEventListener("click", () => {
    currentMode = drawMode[1];
});
//Sketch Mode Button
sketchBtn.addEventListener("click", () => {
    currentMode = drawMode[2];
});
//Clear Mode Button
eraserBtn.addEventListener("click", () => {
    currentMode = drawMode[3];
});