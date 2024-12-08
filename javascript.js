const container = document.querySelector(".container");
const newGridButton = document.querySelector("#newGrid");
let opacity = 0.1;
makeGrid(16, 16);
addEventListener("mouseover" , draw);
newGridButton.addEventListener("click", makeNewGrid);

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }
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
        const backgroundColor = `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)})`;
        element.target.style["background-color"] = backgroundColor;
        element.target.style.opacity = opacity;
        if (opacity < 1) {
            opacity = Math.round((opacity + 0.1) * 10) / 10;
        }
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