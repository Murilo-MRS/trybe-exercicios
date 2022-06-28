function mudaTexto() {
    let descricao = document.querySelectorAll('.center-content p');
    descricao[1].innerHTML = 'josnei xablau';
}
mudaTexto(); 

function mudaCorMain() {
    let mudaCor = document.getElementsByClassName('main-content');
    mudaCor[0].style.backgroundColor = "rgb(76,164,109)";
} 
mudaCorMain();

function mudaCorCenter() {
    let mudaCor = document.getElementsByClassName('center-content');
    mudaCor[0].style.backgroundColor = "rgb(255,255,255)";
} 
mudaCorCenter();

function corrigeTexto() {
    let mudaTexto = document.getElementsByClassName('title');
    mudaTexto[0].innerText = "Exercício 5.1 - JavaEscripit";
} 
corrigeTexto();