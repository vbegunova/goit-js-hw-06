function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#boxes");
const number = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", function () {
  createBoxes(number.value);
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    width += 10;
    height += 10;
    div.style.backgroundColor = getRandomHexColor();
    container.append(div);
  }
}

function destroyBoxes() {
  container.innerHTML = "";
}
