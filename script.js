const viewport = document.querySelector("#viewport");
let tileSize = 20;
let tileNum  = 20;
let gridSize = tileNum * tileNum;
let mode = "black";

const tileStyle = `height: ${tileSize}px; ` +
                  `width: ${tileSize}px;`;

function createGrid() {
    let grid = document.createElement("div");
    grid.setAttribute("id", "grid-container");
    grid.setAttribute("style", `grid-template-columns: repeat(${tileNum}, 1fr); ` +
                               `border: 2px solid black; ` +
                               `height: ${gridSize}px; ` +
                               `width: ${gridSize}px;`);

    let i;
    for (i = 0; i < gridSize; i++) {
        let tile = document.createElement("div");
        tile.style.cssText = tileStyle;
        addTileHover(tile);
        grid.appendChild(tile);
    }

    viewport.appendChild(grid);
}

function clearGrid() {

}

function addTileHover(tile) {
    tile.addEventListener("mouseover", () => {
        tile.setAttribute("style", `background-color: ${mode}`);
    });
    switch (mode) {
        case "black":
            break;
        case "rainbow":
            break;
        case "gray":
            break;
        default:
            break;
    }
}