const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", changeFont);

function changeFont(event) {
  let inputElValue = event.currentTarget.value;
  textEl.style.fontSize = `${inputElValue}px`;
}
