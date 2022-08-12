const btnOne = document.querySelector(".js-btnOne");
const btnTwo = document.querySelector(".js-btnTwo");
const resutDiv = document.querySelector(".js-result");

btnOne.addEventListener("click", firstVar);
btnTwo.addEventListener("click", secondVar);

function firstVar() {
  //select Ul
  const categoriesEl = document.querySelector("#categories").children;
  const categoriesElLength = categoriesEl.length;

  resutDiv.innerHTML = "";

  const totalCount = document.createElement("p");
  totalCount.textContent = `Number of categories: ${categoriesElLength}`;
  resutDiv.append(totalCount);
  console.log("Number of categories:", categoriesElLength);

  for (let i = 0; i < categoriesElLength; i++) {
    const headerEl = document.createElement("p");
    const headerName = categoriesEl[i].firstElementChild.textContent;
    headerEl.textContent = `Category: ${headerName}`;
    headerEl.style.margin = "30px 0 0 0";
    resutDiv.append(headerEl);
    console.log("Category:", headerName);

    const listEl = document.createElement("p");
    const listQty = categoriesEl[i].lastElementChild.children.length;
    listEl.textContent = `Elements: ${listQty}`;
    listEl.style.margin = "0";
    resutDiv.append(listEl);
    console.log("Elements:", listQty);
  }
}

function secondVar() {
  //Var.2

  const listItem = document.querySelectorAll(".item");
  const listLength = listItem.length;

  resutDiv.innerHTML = "";

  resutDiv.innerHTML = `<div>Number of categories: ${listLength}</div>`;

  let resultMarkup = "";

  listItem.forEach((item) => {
    const headerEl = item.firstElementChild.textContent;
    const numberEl = item.lastElementChild.children.length;

    resultMarkup += `</br>
    Category: ${headerEl}</br>
    Elements: ${numberEl}</br>`;
  });

  resutDiv.insertAdjacentHTML("beforeend", resultMarkup);
  console.log(resutDiv.textContent);
}
