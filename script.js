const body = document.querySelector('body');
const h1 = document.querySelector('.heading');

const startTimerButton = document.querySelector('.start');
const timer = document.querySelector('.timer');

setInterval(() => {
  // I borrowed this  "#" + Math.floor(Math.random() * 16777215).toString(16); from https://www.shecodes.io/athena/73117-how-to-generate-an-array-of-random-colors-in-javascript
  body.style.backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16);
}, 2000);

setTimeout(() => {
  h1.classList.remove('hidden');
}, 2000);

setTimeout(() => {
  h1.classList.add('hidden');
}, 7000);

let second = 0;
startTimerButton.addEventListener('click', () => {
  setInterval(() => {
    second++;
    timer.textContent = second;
  }, 1000);
});
