function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  const boxesDiv = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    let height = 30 + (i - 1) * 10;
    let width = 30 + (i - 1) * 10;
    const randomHexColor = getRandomHexColor();
    div.setAttribute(
      "style",
      `background-color:${randomHexColor}; width:${width}px; height:${height}px`
    );
    boxesDiv.push(div);
  }

  boxesEl.append(...boxesDiv);
}

const boxCreation = () => {
  let inputValue = Number.parseInt(inputEl.value);
  createBoxes(inputValue);
};

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

const boxDestroy = () => {
  destroyBoxes();
};

createBtn.addEventListener("click", boxCreation);
destroyBtn.addEventListener("click", boxDestroy);
