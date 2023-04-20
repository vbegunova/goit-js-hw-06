let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const minusClick = (event) => {
    counterValue -= 1;
    value.textContent = counterValue;
}

const plusClick = (event) => {
    counterValue += 1;
    value.textContent = counterValue;
}

minusBtn.addEventListener("click", minusClick);
plusBtn.addEventListener("click", plusClick);