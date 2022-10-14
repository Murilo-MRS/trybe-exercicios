// // 1
// console.log(document.getElementById('elementoOndeVoceEsta'));
// // 2
// console.log(document.getElementById('elementoOndeVoceEsta').parentNode);
// let pai = document.getElementById('elementoOndeVoceEsta').parentNode;
// pai.style.backgroundColor  = "blue";
// // 3
// console.log(document.getElementById('primeiroFilhoDoFilho'));
// let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// filhoDoFilho.innerHTML = 'Aula 5.2 parte1';
// // 4
// console.log(document.getElementById('pai').firstElementChild);
// // 5
// console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
// // 6
// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
// // 7
// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
// // 8
// console.log(document.getElementById('pai').lastElementChild.previousElementSibling);
// ////

// 1
function exercicio1() {
  let acessaElemento = document.getElementById("pai");

  let criaElementoIrmao = document.createElement("section");
  criaElementoIrmao.innerText = "Elemento Criado";
  criaElementoIrmao.style.color = "red";
  acessaElemento.appendChild(criaElementoIrmao);
  console.log(criaElementoIrmao);
}
exercicio1();
//  2
function exercicio2() {
  let acessaElementoOnde = document.getElementById("elementoOndeVoceEsta");
  let criaElementoFilho = document.createElement("section");
  criaElementoFilho.innerHTML = "ELEMENTO FILHO CRIADO";
  acessaElementoOnde.appendChild(criaElementoFilho);
}
exercicio2();

function exercicio3() {
  let acessaElementoOnde = document.getElementById("primeiroFilhoDoFilho");
  let criaElementoFilho = document.createElement("section");
  criaElementoFilho.innerHTML = "ELEMENTO FILHO do Filho CRIADO";
  acessaElementoOnde.appendChild(criaElementoFilho);
  console.log(document.getElementById('primeiroFilhoDoFilho').lastElementChild); // 4
}
exercicio3();

