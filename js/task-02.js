const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUl = document.querySelector("#ingredients");

const makeingredientsList = (arr) => {
  return arr.map((ingredient) => {
    const newListItem = document.createElement("li");
    newListItem.classList.add("item");
    newListItem.textContent = ingredient;
    return newListItem;
  });
};

const ingredientsList = makeingredientsList(ingredients);

ingredientsUl.append(...ingredientsList);
