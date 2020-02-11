let sketchpadContainer = document.getElementById('sketchpadContainer');
let resetBtn = document.getElementById('resetBtn');

let divCount = 16;

let startBackground = randomRGB();

function createGrid() {
    let divSize = 100 / divCount
    let divTotal = divCount * divCount;
    console.log(divTotal);
    
    // Clear sketchpad
    while(sketchpadContainer.firstChild) {
        sketchpadContainer.removeChild(sketchpadContainer.firstChild);
    }
        
    // Generate new sketchpad
    for (i = 0; i < divTotal; i++) {
        newDiv = document.createElement('div');
        newDiv.style.width = divSize + "%";
        newDiv.style.flexGrow = 1;
        newDiv.style.backgroundColor = "rgb(" + startBackground + ")";
        sketchpadContainer.appendChild(newDiv);
    }
}

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return (r + ", " + g + ", " + b);
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

        console.log(rInc, gInc, bInc);
    
        e.target.style.backgroundColor = "rgb(" + rInc + ", " + gInc + ", " + bInc + ")";
    
    });

}

createGrid();

resetBtn.addEventListener("click", function(){
    divCount = prompt("How many squares wide should the grid be?");
    createGrid();
});

colorBtn.addEventListener("click", function(){
    divCount = prompt("How many squares wide should the grid be?");
    startBackground = randomRGB();
    createGrid();
})

shadesRGB();