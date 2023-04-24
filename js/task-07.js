const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${inputRange.value}px`; 

inputRange.addEventListener('input', onInput);

function onInput() {
    text.style.fontSize = `${inputRange.value}px`; 
}