const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputRange.addEventListener('input', onInput);

function onInput() {
    text.style.fontSize = `${inputRange.value}px`; 
}