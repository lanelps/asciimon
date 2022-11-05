import "./style.css";

// screen 160×144 pixels / 10:9 aspect
// screen color #8bac0f

// global variables
//
const body = document.body;
const app = document.querySelector(`.screen-wrapper`);
const gridElement = document.getElementById(`grid`);

// methods
//
function pixel(value, size) {
  const pixelElement = document.createElement(`div`);
  pixelElement.classList.add(`pixel`);
  pixelElement.style.cssText = `
    width: ${size}px;
    height: ${size}px;
  `;
  pixelElement.innerHTML = value;

  return pixelElement;
}

function createGrid(matrix, options) {
  const { width, height, pixelSize } = options;

  gridElement.style.cssText = `
    width: ${width}px;
    height: ${height}px;

    display: grid;
    grid-template-columns: repeat(${width / pixelSize}, ${pixelSize}px);
  `;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      gridElement.appendChild(pixel(matrix[i][j], pixelSize));
    }
  }

  return gridElement;
}

function createMatrix(size) {
  const characters = `1234567890-=~!@#$%^&*()_+qwertyuiop[]\QWERTYUIOP{}|asdfghjkl;'ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>?`;

  const emptyMatrix = new Array(size).fill(new Array(size).fill(null));

  const matrix = [];

  for (let i = 0; i < emptyMatrix.length; i++) {
    matrix.push([]);
    for (let j = 0; j < emptyMatrix[i].length; j++) {
      matrix[i][j] = characters[Math.floor(Math.random() * characters.length)];
    }
  }

  return matrix;
}

function setFontSize(value) {
  const root = document.querySelector(`html`);
  root.style.fontSize = `${value}px`;
}

// main
//
function main() {
  const size = 16;
  const aspectRatio = 1 / 1;
  const resolution = size / 10;
  const pixelSize = 10 * resolution;
  const width = size * pixelSize;
  const height = width / aspectRatio;

  setFontSize(pixelSize);
  const matrix = createMatrix(size);
  app.appendChild(createGrid(matrix, { width, height, pixelSize }));
}

window.addEventListener("DOMContentLoaded", () => {
  main();
});
