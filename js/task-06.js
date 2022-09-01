const inputEl = document.querySelector("#validation-input");
const dataValue = inputEl.dataset.length;

inputEl.addEventListener("blur", inputBlur);

function inputBlur(event) {
  if (
    event.currentTarget.value.length < dataValue ||
    event.currentTarget.value.length > dataValue
  ) {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
    inputEl.classList.add("invalid");
    return;
  }
  if (inputEl.classList.contains("invalid")) {
    inputEl.classList.remove("invalid");
  }
  inputEl.classList.add("valid");
}
