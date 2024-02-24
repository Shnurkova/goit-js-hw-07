// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit)

// function handleSubmit(event) {
//     event.preventDefault();

//     const isValid = {};


//     const elements = event.currentTarget.elements;

//     if (elements.email.value || elements.password.value === null) {
//         alert(`All form fields must be filled in`);
//     }

//     const info = {
//         email: elements.email.value.trim(),
//         password: elements.password.value.trim(),
//     }
//     console.log(info);

//     event.currentTarget.reset();
// }

const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const isValid = {};
    for (const input of loginForm.elements) {
        if (input.type === 'email' || input.type === 'password') {
            isValid[input.name] = input.value.trim();
        }
}
    if (Object.values(isValid).some(value => value === '')) {
        alert('All form fields must be filled in');
    }
    else {
        console.log(isValid);
        loginForm.reset();
    }
})