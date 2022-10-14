const btn = document.querySelector('#click');
const body = document.querySelector('body');
const text = document.createElement('p');
let counter = 0
text.innerText = `${counter}`;
body.appendChild(text);
body.style.textAlign = 'center';

btn.addEventListener('click', () => text.innerText = `${counter += 1}`);