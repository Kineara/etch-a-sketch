// area is always going to be 500px
// determine how large areas should be
let sketchpadContainer = document.getElementById('sketchpadContainer');

let divCount = 16;
divSize = 500 / divCount;
divTotal = divCount * divCount;

function createGrid() {
    for (i = 0; i < divTotal; i++) {
        newDiv = document.createElement('div');
        newDiv.style.width = divSize + "px";
        newDiv.style.height = divSize + "px";
        newDiv.style.backgroundColor = "green";
        newDiv.textContent = "o";
        sketchpadContainer.appendChild(newDiv);
    }
}


sketchpadContainer.addEventListener("mouseover", draw);