const mainBox = document.querySelector("#mainBox")

for ( i = 0; i < 10; i++) {
    //document.createElement("div").classList.add("item");
    //document.body.appendChild(document.createElement("div"));
    //document.getElementById("mainBox").appendChild(document.createElement("div").classList.add("test"));
    const container = document.createElement("div");
    container.classList.add("pixels");
    mainBox.appendChild(container);
}