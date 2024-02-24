const userName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

userName.addEventListener("input", handleInput)

function handleInput(event) {
    console.log(event);

    const name = event.currentTarget.value;

    if (event.currentTarget.value.trim() === "") {
        return "Anonymous"
    } else {
        spanName.textContent(`${name}`);
    }
}
