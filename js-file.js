const div = document.querySelector('#container');

const n = 64;

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

const resetBtn = document.querySelector('#reset');

//resetBtn.addEventListener("click", () => {
//    boxes.forEach((box) => box.classList.remove("hovered"));
//});