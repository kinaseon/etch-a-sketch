let gridSize = 16;

// Create grid items
let fragment = document.createDocumentFragment();
for (let i = 0; i < gridSize ** 2; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.toggle('grid-item');
    fragment.appendChild(gridItem);
}

// Append grid items
const gridContainer = document.querySelector('.container');
gridContainer.appendChild(fragment);
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

// Clear button
const clearButton = document.querySelector('#clear');
clearButton.onclick = function() {
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.style.backgroundColor = 'white';
    })
}

// Black button
const blackButton = document.querySelector('#black');
blackButton.onclick = function() {
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.onmouseover = function() {
            this.style.backgroundColor = 'black';
        }
    })
}

// Rainbow button
const rainbowButton = document.querySelector('#rainbow');
rainbowButton.onclick = function() {
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.onmouseover = function() {
            let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = `${randomColor}`;
        }
    })
}

// Slider
const slider = document.querySelector('.slider');
slider.onchange = function() {
    let gridItems = document.querySelectorAll('.grid-item');
    while (gridContainer.firstElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
    gridSize = this.firstElementChild.value;
    for (let i = 0; i < gridSize ** 2; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.toggle('grid-item');
        fragment.appendChild(gridItem);
    }
    gridContainer.appendChild(fragment);
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}