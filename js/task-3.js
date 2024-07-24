const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInput => {
    let enteredInput = nameInput.value.trim();

    if (enteredInput === "") {
        enteredInput = 'Anonymous';
    };
    nameOutput.textContent = enteredInput;
})
