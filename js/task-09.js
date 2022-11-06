function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeColorBtn.addEventListener('click', colorChangeHandler);

function colorChangeHandler() {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}