import "./style.css";

// screen 160×144 pixels / 10:9 aspect
// screen color #8bac0f

// global variables
//
const body = document.body;
const app = document.querySelector(`.screen-wrapper`);
const gridElement = document.getElementById(`grid`);

const aspectRatio = 1 / 1;
const resolution = 2;
const pixelSize = 10 * resolution;
const width = 160 * resolution;
const height = width / aspectRatio;
const pixelLength = Math.floor((width * height) / pixelSize / pixelSize);

const characters = `1234567890-=~!@#$%^&*()_+qwertyuiop[]\QWERTYUIOP{}|asdfghjkl;'ASDFGHJKL:"zxcvbnm,./ZXCVBNM<>?`;
// methods
//
function pixel(index) {
  const pixelElement = document.createElement(`div`);
  pixelElement.classList.add(`pixel`);
  pixelElement.style.cssText = `
    width: ${pixelSize}px;
    height: ${pixelSize}px;
  `;
  pixelElement.innerHTML =
    characters[Math.floor(Math.random() * characters.length)];

  return pixelElement;
}

function createGrid() {
  gridElement.style.cssText = `
    width: ${width}px;
    height: ${height}px;

    display: grid;
    grid-template-columns: repeat(${Math.floor(
      width / pixelSize
    )}, ${pixelSize}px);
  `;

  for (let i = 0; i < pixelLength; i++) {
    gridElement.appendChild(pixel(i));
  }

  return gridElement;
}

// main
//
function main() {
  app.appendChild(createGrid());
}

window.addEventListener("DOMContentLoaded", () => {
  main();
});
