function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");

function changeColor() {
    const body = document.querySelector("body");
    const colorSpan = document.querySelector(".color");
    const color = getRandomHexColor(); // Зберегти значення кольору в змінній
    body.style.backgroundColor = color; // Встановити колір тла
    colorSpan.textContent = color; // Встановити текстовий вміст colorSpan
}

changeColorBtn.addEventListener("click", changeColor);

