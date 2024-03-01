let changeColor = document.getElementById("color");
let bgcircle = document.getElementById("circle");

changeColor.addEventListener("click", function () {
    bgcircle.style.backgroundColor = randomColor();
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let changeShape = document.getElementById("shape");
let oldshape = document.getElementById('square');
let newShape = document.getElementById('triangle');
var isChanged = false;

changeShape.addEventListener('click', function () {

    if (!isChanged) {

        newShape.style.display = 'block';
        oldshape.style.display = 'none';
        isChanged = true;

    } else {

        newShape.style.display = 'none';
        oldshape.style.display = 'block';
        isChanged = false;
    }
});