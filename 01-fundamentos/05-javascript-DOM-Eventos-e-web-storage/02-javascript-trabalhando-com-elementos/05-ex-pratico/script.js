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

function exercicio3() {
    let mainPai = document.querySelector('main');
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

}
exercicio5();