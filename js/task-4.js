const form = document.querySelector(".login-form");

    form.addEventListener("submit", handleSubmit)

    function handleSubmit(event) {
        
    event.preventDefault();

    const elements = event.currentTarget.elements;
    if (form.email.value.trim() === "" || form.password.value.trim() === "") {
        alert(`All form fields must be filled in`);
    }

    const info = {
        email: elements.email.value,
        password: elements.password.value,
    }
    console.log(info);

    event.currentTarget.reset();
}  


