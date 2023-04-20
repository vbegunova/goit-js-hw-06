const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

console.dir(textInput);

textInput.addEventListener("input", onInput);

function onInput(event) {
  if (event.currentTarget.value == "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
}
