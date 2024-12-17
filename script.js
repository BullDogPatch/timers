const body = document.querySelector('body');
const h1 = document.querySelector('.heading');

setInterval(() => {
  // I borrowed this  "#" + Math.floor(Math.random() * 16777215).toString(16); from https://www.shecodes.io/athena/73117-how-to-generate-an-array-of-random-colors-in-javascript
  body.style.backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16);
}, 2000);

setTimeout(() => {
  h1.classList.remove('hidden');
}, 5000);
