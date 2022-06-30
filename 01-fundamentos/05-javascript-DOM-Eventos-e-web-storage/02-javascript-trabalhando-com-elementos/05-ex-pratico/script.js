function exercicio1() {
  let criaH1 = document.createElement("h1");
  criaH1.innerHTML = "Exercício 5.2 - JavaScript DOM";
  criaH1.className = 'title'; // exercicio 1 parte - 2 
  document.body.appendChild(criaH1);
}
exercicio1();

function exercicio2() {
  let criaMain = document.createElement("main");
  criaMain.className = "main-content";
  document.body.appendChild(criaMain);
}
exercicio2();

let mainPai = document.querySelector("main");
function exercicio3() {
  let criaSection = document.createElement("section");
  criaSection.className = "center-content";
  mainPai.appendChild(criaSection);
}
exercicio3();

function exercicio4() {
  let sectionPai = document.querySelector("section");
  let criaP = document.createElement("p");
  criaP.innerText = "TEXTO VEM AQUI";
  sectionPai.appendChild(criaP);
}
exercicio4();

function exercicio5() {
  let criaSection = document.createElement("section");
  criaSection.className = "left-content";
  mainPai.appendChild(criaSection);
}
exercicio5();

function exercicio6() {
  let criaSection = document.createElement("section");
  criaSection.className = "right-content";
  mainPai.appendChild(criaSection);
}
exercicio6();

function exercicio7() {
  let sectionLeft = document.querySelector(".left-content");
  let criaImg = document.createElement("img");
  criaImg.src = "https://picsum.photos/200";
  criaImg.className = "small-image";
  sectionLeft.appendChild(criaImg);
}
exercicio7();

function exercicio8() {
  let sectionRight = document.querySelector(".right-content");
  let criaUl = document.createElement("ul");
  sectionRight.appendChild(criaUl);
  let listaLi = ["um","dois","tres","quatro","cinco","seis","sete","oito","nove","dez",];

  for (let index = 0; index < listaLi.length; index++) {
    let criaLi = document.createElement("li");
    criaLi.innerText = listaLi[index];
    criaUl.appendChild(criaLi);
  }
}
exercicio8();

function exercicio9() {
    for (let index = 0; index < 3; index += 1) {
        let criaH3 = document.createElement('h3');
        criaH3.className = 'description'; // exercicio 2 parte - 2 
        mainPai.appendChild(criaH3);
    }
}
exercicio9();


// exercicio 3 parte - 2 
// exercicio 4 parte - 2 
// exercicio 5 parte - 2 
// exercicio 6 parte - 2 

