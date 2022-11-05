import "./style.css";

// screen 160×144 pixels / 10:9 aspect
// screen color #8bac0f

// global variables
//
const body = document.body;
const app = document.getElementById(`app`);

const aspectRatio = 1 / 1;
const resolution = 2;
const pixelSize = 10 * resolution;
const width = 160 * resolution;
const height = width / aspectRatio;
const pixelLength = (width * height) / pixelSize / pixelSize;

// methods
//
function pixel() {
  const pixelElement = document.createElement(`div`);
  pixelElement.classList.add(`pixel`);
  pixelElement.style.cssText = `
    width: ${pixelSize}px;
    height: ${pixelSize}px;
  `;

  return pixelElement;
}

function createGrid() {
  const gridElement = document.createElement(`div`);
  gridElement.classList.add(`grid`);
  gridElement.style.cssText = `
    width: ${width}px;
    height: ${height}px;

    display: grid;
    grid-template-columns: repeat(${width / pixelSize}, ${pixelSize}px);
  `;

  for (let i = 0; i < pixelLength; i++) {
    gridElement.appendChild(pixel());
  }

  app.appendChild(gridElement);
}

// main
//
function main() {
  createGrid();
}

window.addEventListener("DOMContentLoaded", () => {
  main();
});
