const registerForm = document.querySelector('.login-form');

const handleSubmit = event => {
    event.preventDefault();
    const formEmail = registerForm.elements.email.value.trim();
    const formPassword = registerForm.elements.password.value.trim();

    if (formEmail === "" || formPassword === "") {
        return alert ("All form fields must be filled in")
    }
    const formData = {
        email: formEmail,
        password: formPassword
    };
    console.log(formData);

    registerForm.reset();

}
     
registerForm.addEventListener('submit', handleSubmit);