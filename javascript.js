const container = document.querySelector(".container");
const newGridButton = document.querySelector("#newGrid");
makeGrid(16, 16);
addEventListener("mouseover" , draw);
newGridButton.addEventListener("click", makeNewGrid);

function makeGrid(sizeX, sizeY) {
    let column;
    let cell;
    for (y = 1; y < sizeY + 1; y++) {
        column = document.createElement("div");
        column.classList.add("column");
        column.id = "column-" + y
        container.appendChild(column);
        for (x = 1; x < sizeX + 1; x++) { 
            cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = "cell-" + ((y-1)*16 + x)
            column.appendChild(cell);
        }
    }
}
function draw(element) {
    if (element.target.classList == "cell") {
        element.target.style["background-color"] = "blue";
    }
}
function makeNewGrid() {
    const answer = Number(prompt("What's the size you want. note: Size is limited by 100."));
    if (answer > 100 || answer < 1) {
        console.log(answer + " is not valid.")
        return;
    }
    while(container.firstElementChild) {
        container.firstElementChild.remove();
    }
    makeGrid(answer, answer);
}