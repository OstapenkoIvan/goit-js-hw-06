const formEl = document.querySelector(".login-form");
let dataObj = {};

formEl.addEventListener("submit", getData);

function getData(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены! Это тебе не шуточки");
  }

  const currentEls = event.currentTarget.elements;

  for (let i = 0; i < currentEls.length - 1; i++) {
    const { name, value } = currentEls[i];

    console.log(`${name}: ${value}`);

    dataObj[name] = value;
  }
  event.currentTarget.reset();
  console.log(dataObj);
}
