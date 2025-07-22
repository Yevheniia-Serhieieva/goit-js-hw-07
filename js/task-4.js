const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', e => {
    e.preventDefault();

    const emailValue = formElem.elements.email.value.trim();
    const passwordValue = formElem.elements.password.value.trim();
    
    if(emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
    }else {
        const userData = {
            email: emailValue,
            password: passwordValue,
        };
    
        console.dir(userData);
        formElem.reset();
    }
})

