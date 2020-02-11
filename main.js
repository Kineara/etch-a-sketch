// Function Defs
function randomRGB() {
    // Return random rgb value string
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    startBackground = "rgb(" + r + ", " + g + ", " + b + ")";
}

function createGrid() {
    let divSize = 100 / divCount
    let divTotal = divCount * divCount;
    
    // Clear sketchpad
    while(sketchpadContainer.firstChild) {
        sketchpadContainer.removeChild(sketchpadContainer.firstChild);
    }
        
    // Generate new sketchpad
    for (i = 0; i < divTotal; i++) {
        newDiv = document.createElement('div');
        newDiv.style.width = divSize + "%";
        newDiv.style.flexGrow = 1;
        newDiv.style.backgroundColor = startBackground;
        sketchpadContainer.appendChild(newDiv);
    }
}

function setSize() {
    let gridSize;
    do {gridSize = prompt("How many squares wide should the grid be? (1-64)");
    }
    while (gridSize < 1 || gridSize > 64);
    divCount = gridSize;
}

function shadesRGB() {
    // Shades cells 10% darker each pass
    sketchpadContainer.addEventListener("mouseover", function(e){
        let colors = e.target.style.backgroundColor;
        let rgbSlice = colors.slice(4, -1);
        let rgbArray = rgbSlice.split(', ');

        for (let i = 0; i < 3; i++) {
            if (rgbArray[i] < 26) {
                rgbArray[i] = 26;
            }
        }
    
        let rInc = rgbArray[0];
        let gInc = rgbArray[1];
        let bInc = rgbArray[2];
    
        rInc -= 26;
        gInc -= 26;
        bInc -= 26;
    
        e.target.style.backgroundColor = "rgb(" + rInc + ", " + gInc + ", " + bInc + ")";
    });
}

// Global Variables
let sketchpadContainer = document.getElementById('sketchpadContainer');
let resetBtn = document.getElementById('resetBtn');
let divCount = 16;
let startBackground

// Initial default grid generation
randomRGB();
createGrid();

// Buttons
resetBtn.addEventListener("click", function(){
    setSize();
    createGrid();
});

colorBtn.addEventListener("click", function(){
    setSize();
    randomRGB();
    createGrid();
});

// Drawing
shadesRGB();