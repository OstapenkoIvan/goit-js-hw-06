const backgroundEl = document.querySelector(".widget");
const colorEl = document.querySelector(".color");
const buttonActive = document.querySelector(".change-color");

buttonActive.addEventListener("click", changeBg);

function changeBg(event) {
  const currentColor = getRandomHexColor();
  backgroundEl.style.backgroundColor = currentColor;
  colorEl.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
