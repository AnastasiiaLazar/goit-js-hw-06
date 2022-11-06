function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = refs.inputEl.value;
  let boxSize = 30;
  let markup = '';
  for (let i = 0; i < amount; i += 1) {
      markup += `<div style="height: ${boxSize + i * 10}px; width: ${boxSize + i * 10}px; background-color: ${getRandomHexColor()}"></div>`
  };
  refs.container.insertAdjacentHTML("beforeend", markup); 
};

function destroyBoxes() {
  refs.container.innerHTML = "";  
};