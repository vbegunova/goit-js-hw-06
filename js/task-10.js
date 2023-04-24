function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#boxes");
const number = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const input = document.querySelector("#controls input");
const minValue = Number(input.getAttribute("min"));
const maxValue = Number(input.getAttribute("max"));
const step = Number(input.getAttribute("step"));

createBtn.addEventListener("click", function () {
  createBoxes(number.value);
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  // if (amount > maxValue) {
  //   amount = maxValue;
  // }
  // if (amount < minValue) {
  //   amount = minValue;
  // }

  if (amount > maxValue || amount < minValue) {
    alert("Введіть значення від 1 до 100!");
    input.value = "";
    return 0;
  }

  let width = 30;
  let height = 30;
  // let markup = [];
  let markup = "";

  for (let i = 0; i < amount; i += step) {
    const colorValue = getRandomHexColor();
    // markup.push(`<div style="width: ${width}px; height: ${height}px; background-color: ${colorValue};"></div>`) ;
    markup += `<div style="width: ${width}px; height: ${height}px; background-color: ${colorValue};"></div>`;
    width += 10;
    height += 10;
  }
  // container.insertAdjacentHTML("beforeend", markup.join(''));
  container.innerHTML = markup;
}

function destroyBoxes() {
  input.value = "";
  container.innerHTML = "";
}
