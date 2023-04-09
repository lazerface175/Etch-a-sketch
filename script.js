const mainBox = document.querySelector("#mainBox")
const setSize = document.querySelector("#setSize")
const canvasArea = 250000;
let gridSize = document.querySelector("#setSize").addEventListener("click", setGrid)
let pixels;


function setGrid() {
    gridSize = prompt("Enter grid size");
    amountOfSquares = Math.pow(gridSize, 2);

    while (mainBox.hasChildNodes () == true) {mainBox.removeChild (mainBox.lastChild);};
    if (gridSize > 100) {
        alert("Grid size cannot be greater than 100");
    } else {
        addGrid();
    }

};



function addGrid () {
    for ( i = 0; i < amountOfSquares; i++) {
    //document.createElement("div").classList.add("item");
    //document.body.appendChild(document.createElement("div"));
    //document.getElementById("mainBox").appendChild(document.createElement("div").classList.add("test"));
    pixels = document.createElement("div");
    pixels.classList.add("pixels");
    pixels.style.width = `${Math.sqrt(canvasArea/amountOfSquares)}px`;
    mainBox.appendChild(pixels);
    pixels.addEventListener("mouseover", (event) => {
        // console.log(event);
         if (event.buttons === 1) {
             event.target.style.backgroundColor = "black";
         }
    });
};

};