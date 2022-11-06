const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

const handleName = (event) => {
    if (event.currentTarget.value.trim().length !== 0) {
        refs.nameOutput.textContent = event.currentTarget.value.trim(); 
    } else { refs.nameOutput.textContent = 'Anonymous' };
}

refs.nameInput.addEventListener("input", handleName);