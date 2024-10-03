let gridSize = 16;
// Task 1: Create squares 16x16 divs inside container:
const container = document.querySelector("#container");
container.setAttribute("style", "display: flex; flex-direction: column");

for (let i = 0; i < gridSize; i++) {
  const divContainer = document.createElement("div-container");
  divContainer.classList.add("container2");
  divContainer.setAttribute("style", "display: flex; flex-direction: row");
  container.appendChild(divContainer);
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    div.textContent = "div";
    div.setAttribute("style", "color: blue; background: lightblue;");
    divContainer.appendChild(div);
    div.addEventListener("mouseover", () => {
      div.setAttribute("style", "background: red;");
    });
  }
}

// TODO: add button to create new fresh grid, get user input to decide number of squares (userInput1xuserInput1)
const button = document.querySelector("button");
button.addEventListener("click", () => {
  gridSize = prompt("plz type grid value");
  console.log(gridSize);
});

// TODO: Extra! Randomize rgb color for each hover

// TODO: Extra! Implement progressive darkening 10% for hover (CSS Opacity)
