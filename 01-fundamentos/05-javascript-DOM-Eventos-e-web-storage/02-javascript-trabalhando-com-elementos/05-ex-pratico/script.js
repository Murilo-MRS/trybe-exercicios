function exercicio1() {
  let criaH1 = document.createElement("h1");
  criaH1.innerHTML = "Exercício 5.2 - JavaScript DOM";
  document.body.appendChild(criaH1);
}
exercicio1();

function exercicio2() {
    let criaMain = document.createElement("main");
    criaMain.className = "main-content";
    document.body.appendChild(criaMain);
}
exercicio2();

let mainPai = document.querySelector('main');
function exercicio3() {
    let criaSection = document.createElement('section');
    criaSection.className = 'center-content';
    mainPai.appendChild(criaSection);
}
exercicio3();

function exercicio4() {
    let sectionPai = document.querySelector('section');
    let criaP = document.createElement('p');
    criaP.innerText = 'TEXTO VEM AQUI';
    sectionPai.appendChild(criaP);
}
exercicio4();

function exercicio5() {
    let criaSection = document.createElement('section');
    criaSection.className = 'left-content';
    mainPai.appendChild(criaSection);
}
exercicio5();

function exercicio6() {
    let criaSection = document.createElement('section');
    criaSection.className = 'right-content';
    mainPai.appendChild(criaSection);
}
exercicio6();

function exercicio7() {
    let sectionLeft = document.querySelector('.left-content');
    let criaImg = document.createElement('img');
    criaImg.src = 'https://picsum.photos/200';
    criaImg.className = 'small-image';
    sectionLeft.appendChild(criaImg);
}
exercicio7();

