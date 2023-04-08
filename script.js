const mainBox = document.querySelector("#mainBox")
const setSize = document.querySelector("#setSize")
let gridSize = document.querySelector("#setSize").addEventListener("click", setGrid)

function setGrid() {
    gridSize = prompt("Enter grid size");
    amountOfSquares = Math.pow(gridSize, 2);
    while (mainBox.hasChildNodes () == true) {mainBox.removeChild (mainBox.lastChild);};

    //let containerSize = document.getElementById("pixels").style.width=`${100+100}px`;

    if (gridSize > 100) {
        alert("Grid size cannot be greater than 100");
    } else {
        addGrid();
    }

}



function addGrid () {
    for ( i = 0; i < amountOfSquares; i++) {
    //document.createElement("div").classList.add("item");
    //document.body.appendChild(document.createElement("div"));
    //document.getElementById("mainBox").appendChild(document.createElement("div").classList.add("test"));
    // container.style.width = `${gridSize}px`;
    // container.style.height = `${gridSize}px`;
    const pixels = document.createElement("div");
    const canvasArea = 250000;
    pixels.classList.add("pixels");
    pixels.style.width = `${Math.sqrt(canvasArea/amountOfSquares)}px`;
    mainBox.appendChild(pixels);
};

}