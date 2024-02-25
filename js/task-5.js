function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");

function changeColor(){
    const body = document.querySelector("body");
    body.style = `background-color: ${getRandomHexColor()}`;
    const colorSpan = document.querySelector(".color");
    colorSpan.textContent = getRandomHexColor();
}

changeColorBtn.addEventListener("click", changeColor());