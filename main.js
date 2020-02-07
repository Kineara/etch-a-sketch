// area is always going to be 500px
// determine how large areas should be
let sketchpadContainer = document.getElementById('sketchpadContainer');
let resetBtn = document.getElementById('resetBtn');

let divCount = 16;

function createGrid() {
    let divSize = 500 / divCount;
    let divTotal = divCount * divCount;
    while(sketchpadContainer.firstChild) {
        sketchpadContainer.removeChild(sketchpadContainer.firstChild);
    }
        
    for (i = 0; i < divTotal; i++) {
        newDiv = document.createElement('div');
        newDiv.style.width = divSize + "px";
        newDiv.style.height = divSize + "px";
        newDiv.style.backgroundColor = "grey";
        sketchpadContainer.appendChild(newDiv);
    }
}

createGrid();

resetBtn.addEventListener("click", function(){
    divCount = prompt("How many squares wide should the grid be?");
    createGrid();
});

sketchpadContainer.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = "blue";
});