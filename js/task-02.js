const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

[...ingredients].forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  console.log(li.textContent);
  list.append(li);
});
