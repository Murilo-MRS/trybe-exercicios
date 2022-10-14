// 1
console.log(document.getElementById('elementoOndeVoceEsta'));
// 2
console.log(document.getElementById('elementoOndeVoceEsta').parentNode);
let pai = document.getElementById('elementoOndeVoceEsta').parentNode;
pai.style.backgroundColor  = "blue";
// 3
console.log(document.getElementById('primeiroFilhoDoFilho'));
let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho.innerHTML = 'Aula 5.2 parte1';
// 4 
console.log(document.getElementById('pai').firstElementChild);
// 5
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
// 6
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
// 7
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
// 8
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);
