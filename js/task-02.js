const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");


// ingredients.forEach(item => {
// const li = document.createElement("li");
// li.textContent = item;
// li.classList.add("item");
// list.append(li);
// })

const liElements = ingredients
  .map((item) => `<li class="item">${item}</li>`)
  .join("");

list.innerHTML = liElements;

console.log(list);



