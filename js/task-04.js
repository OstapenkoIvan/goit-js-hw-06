let counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const step = 1;

let containerNumber = 0;

incrementBtn.addEventListener("click", incrementValue);
decrementBtn.addEventListener("click", decrementValue);

function incrementValue() {
  containerNumber += step;
  counterValue.textContent = containerNumber;
}

function decrementValue() {
  containerNumber -= step;
  counterValue.textContent = containerNumber;
}
