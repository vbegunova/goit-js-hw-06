const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', onBlur);
const LENGTH = textInput.dataset.length;

function onBlur() {
    if(textInput.value.length === Number(LENGTH)) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
}

