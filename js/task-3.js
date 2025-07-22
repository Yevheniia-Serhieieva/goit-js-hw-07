const userNameElem = document.querySelector('#name-input');
const spanNameElem = document.querySelector('#name-output');
const anonym = `Anonymous`;

userNameElem.addEventListener('input', e => {
    e.preventDefault();
    
    const value = userNameElem.value.trim();
    
    if(value === '' || value === ' ') {
        spanNameElem.textContent = anonym;
    } else {
        spanNameElem.textContent = value;
    }
})



