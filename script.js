const rowToHtml = (row) =>
  row.map(() => `<div class="row_item"></div>`).join("");

const createGrid = (size) => {
  return range2D(0, size)
    .map((row) => `<div class="row">${rowToHtml(row)}</div>`)
    .join("");
};

const range2D = (start, end) => {
  return range(start, end).map(() => range(start, end));
};

const range = (start, end) => {
  let arr = [];
  for (let i = start; i < end; i++) {
    arr.push(i);
  }
  return arr;
};

const renderGrid = (gridSize) => {
  const divGrid = document.querySelector(".grid_container");
  divGrid.innerHTML = createGrid(gridSize);
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getRandomRGB = () => {
  return `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
}

const updateDOM = () => {
  const squares = document.querySelectorAll(".row_item");
  squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor ||= getRandomRGB();
      event.target.style.opacity = Math.min(+event.target.style.opacity + 0.1, 1);
    });
  });
};

const render = (gridSize) => {
  renderGrid(gridSize);
  updateDOM();
};

render(16);

const newGridBtn = document.querySelector("#new_grid_btn");

newGridBtn.addEventListener("click", () => {
  let newSize = prompt(
    "What size (squares x squares) do you want the new grid to be?"
  );
  if (newSize > 100) {
    newSize = prompt("Please choose a value smaller than 100 squares:");
  }
  render(newSize);
});
