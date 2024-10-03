console.log("hello, world");

// TODO: create squares 16x16 divs inside container:
const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("row");
  div.textContent = "c";
  div.setAttribute(
    "style",
    "color: blue; background: lightblue; display: flex; flex-direcition: row",
  );
  container.appendChild(div);
}

// TODO: setup hover event listener to change color of divs
//
// TODO: add button to create new fresh grid, get user input to decide number of squares (userInput1xuserInput1)
//
// TODO: Extra! Randomize rgb color for each hover

// TODO: Extra! Implement progressive darkening 10% for hover (CSS Opacity)
