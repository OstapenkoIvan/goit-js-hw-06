let nameOutput = document.querySelector("#name-output");
let nameInput = document.querySelector("#name-input");

nameInput.addEventListener("input", addName);

function addName(event) {
  if (event.currentTarget.value === "") {
    return (nameOutput.textContent = "Anonymous");
  }

  nameOutput.textContent = event.currentTarget.value;
}
