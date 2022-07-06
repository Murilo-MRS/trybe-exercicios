// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function clicaLink (e) {
    e.preventDefault();
}

HREF_LINK.addEventListener('click', clicaLink)