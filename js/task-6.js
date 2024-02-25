function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const controls = document.querySelector("#controls");


createBtn.addEventListener("click", handleClick);

function handleClick(event) {

    input.focus()
    if (input.value > 0 && input.value <101) {
        createBoxes(input.value);
        input.value = '';
    } else {
        alert('Amount is not correct')
    }
    
    event.currentTarget.reset();
}

destroyBtn.addEventListener("click", () => {
    input.value = '';    
    boxes.innerHTML = "";   
  
});
 
function createBoxes(amount) {
    boxes.innerHTML = "";
    boxSize = 30;
    for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxSize}px; height: ${boxSize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxSize += 10;
  }
}

