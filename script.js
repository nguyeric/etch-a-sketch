const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');

let sides = 8;

function createGrid() {
    for (i = 0; i < sides * sides; i++) {
        const square = document.createElement('div');
        square.classList.add('gridSquare');
        square.style.width = 35/sides + 'em';
        square.style.height = 35/sides + 'em';
        square.addEventListener('mouseover', e => {
            square.style.backgroundColor = "grey";
        })

        grid.appendChild(square);
    }
}

createGrid();
container.appendChild(grid);

/* gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', e => {
        gridSquare.style.backgroundColor = "grey";
    })
     gridSquare.addEventListener('mouseout', e => {
        gridSquare.style.backgroundColor = "white";
    })
}); */

/* gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mousedown', e => {
        gridSquare.removeEventListener('mouseout', e);
        gridSquare.removeEventListener('mouseover', e);
        gridSquare.style.backgroundColor = "black";
    })
}); */

const button = document.querySelector('#clear');

button.addEventListener('click', e => {
    sides = prompt("How many squares per side?");
    document.querySelectorAll('div.gridSquare').forEach((gridSquare) => grid.removeChild(gridSquare));
    createGrid();
})
