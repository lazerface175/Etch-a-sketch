const mainBox = document.querySelector("#mainBox")
const setSize = document.querySelector("#setSize")
let gridSize = document.querySelector("#setSize").addEventListener("click", setGrid)

function setGrid() {
    gridSize = prompt("Enter grid size");
    while (mainBox.hasChildNodes ()) {mainBox.removeChild (mainBox.lastChild);};
    addGrid();
}

function addGrid () {
    for ( i = 0; i < gridSize; i++) {
    //document.createElement("div").classList.add("item");
    //document.body.appendChild(document.createElement("div"));
    //document.getElementById("mainBox").appendChild(document.createElement("div").classList.add("test"));
    const container = document.createElement("div");
    container.classList.add("pixels");
    mainBox.appendChild(container);
}}