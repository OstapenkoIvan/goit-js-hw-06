function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainer = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

let markupToPrint = "";

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(event) {
  boxesContainer.innerHTML = "";
  const generatedNumber = document.querySelector("input").value;

  //test
  let fragment = new DocumentFragment();

  for (let i = 1; i <= generatedNumber; i++) {
    const boxSize = i * 10 + 20 + "px";

    const createBox = document.createElement("div");
    createBox.style.backgroundColor = getRandomHexColor();
    createBox.style.width = boxSize;
    createBox.style.height = boxSize;

    // boxesContainer.append(createBox);
    //test
    fragment.append(createBox);
  }

  //test
  boxesContainer.append(fragment);
}

function destroyBoxes(event) {
  boxesContainer.innerHTML = "";
}
