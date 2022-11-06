const input = document.querySelector('#validation-input');
const permittedLength = input.getAttribute('data-length');

const inputValidationHandler = () => {
    if (input.value.trim().length === Number(permittedLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
};

input.addEventListener('blur', inputValidationHandler);