const createGrid2 = (size) => {
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

const rowToHtml = (row) => row.map(() => `<div class="row_item"></div>`).join('')

const createGrid = (size) => {
    //return range(0,size).map(()=>`<div class="row">${range(0,size).map(()=>`<div class="row_item"></div>`).join('')}</div>`).join('');
    return range2D(0, size).map((row) => `<div class="row">${rowToHtml(row)}</div>`).join('');
}

const range2D = (start, end) => {
    return range(start, end).map(() => range(start, end));
}

const range = (start, end) => {
    let arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
}

const renderGrid = (gridSize) => {
    const divGrid = document.querySelector(".grid_container");
    divGrid.innerHTML = createGrid(gridSize);
}

const updateDOM = () => {
    const squares = document.querySelectorAll(".row_item");
    squares.forEach((square) => {
        square.addEventListener('mouseover', (event) => {
            console.log(event.target.getAttribute('style'));
            event.target.setAttribute('style', 'background-color: lightblue');
        });
    });
}

const render = (gridSize) => {
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


