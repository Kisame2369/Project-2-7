function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
button.addEventListener("click", colorChange);
function colorChange() {
  const color = getRandomHexColor();
  span.textContent = color;
  document.body.style.backgroundColor = color;
}