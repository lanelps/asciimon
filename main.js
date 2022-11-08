import "./style.css";

// screen 160×144 pixels / 10:9 aspect
// screen color #8bac0f

// global variables
//
// const body = document.body;
const app = document.querySelector(`.screen-wrapper`);
const gridElement = document.getElementById(`grid`);

// methods
//
function colorMiddlePixel(pixel) {
  pixel.classList.add(`blink`);
}

function getMiddlePixel(matrix) {
  const middleRowIndex = Math.round((matrix.length - 1) / 2);
  const middleColumnIndex = Math.round((matrix[middleRowIndex].length - 1) / 2);

  const middlePixel = document.querySelector(
    `[data-row-index="${middleRowIndex}"][data-col-index="${middleColumnIndex}"]`
  );
  return middlePixel;
}

function pixel({ text, size, row, col }) {
  const pixelElement = document.createElement(`div`);
  pixelElement.classList.add(`pixel`);
  pixelElement.style.cssText = `
    width: ${size}px;
    height: ${size}px;
  `;
  pixelElement.innerHTML = text;
  pixelElement.dataset.rowIndex = row;
  pixelElement.dataset.colIndex = col;

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
      gridElement.appendChild(
        pixel({ text: matrix[i][j], size: pixelSize, row: i, col: j })
      );
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
  root.style.fontSize = `${value - 2}px`;
}

// main
//
function main() {
  const size = 17;
  const aspectRatio = 1 / 1;
  const pixelSize = 16;
  const width = size * pixelSize;
  const height = width / aspectRatio;

  setFontSize(pixelSize);
  const matrix = createMatrix(size);
  app.appendChild(createGrid(matrix, { width, height, pixelSize }));

  const middlePixelElement = getMiddlePixel(matrix);
  colorMiddlePixel(middlePixelElement);
}

window.addEventListener("DOMContentLoaded", () => {
  main();
});
