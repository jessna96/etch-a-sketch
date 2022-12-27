const createGrid = (size) => {
    let gridHTML = ``;
    for (let i = 0; i < size; i++) {
        gridHTML += `<div class="row">`;
        for (let i = 0; i < size; i++) {
            gridHTML += `<div class="row_item"></div>`;
        }
        gridHTML += `</div>`;
    }
    return gridHTML;
}

const renderGrid = (gridSize) => {
    const divGrid = document.querySelector(".grid_container");
    divGrid.innerHTML = createGrid(gridSize);
}

const updateDOM = () => {
    const squares = document.querySelectorAll(".row_item");
    squares.forEach((square) => {
        square.addEventListener('mouseover', (event) => {
            event.target.setAttribute('style', 'background-color: lightblue');
        });
    });
}

const render = (gridSize)=>{
    renderGrid(gridSize);
    updateDOM();
};

render(16);

//add 10% of black: CSS filter: brightness(100%)  -> 0% is completely black

const newGridBtn = document.querySelector("#new_grid_btn");

newGridBtn.addEventListener('click', () => {
    let newSize = prompt('What size (squares x squares) do you want the new grid to be?');
    if (newSize > 100) {
        newSize = prompt('Please choose a value smaller than 100 squares:');
    }
    render(newSize);
});


