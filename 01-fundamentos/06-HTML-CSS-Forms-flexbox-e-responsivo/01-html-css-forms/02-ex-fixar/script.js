// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function clicaLink (e) {
    e.preventDefault();
}

function inputAminus(e) {
    if (e.key !== 'a') {
        e.preventDefault();
    }
}

HREF_LINK.addEventListener('click', clicaLink)
INPUT_CHECKBOX.addEventListener('click', clicaLink)
INPUT_TEXT.addEventListener('keypress', inputAminus)