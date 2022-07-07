const btnSend = document.getElementById("btn-send");
const btnDelete = document.getElementById("btn-delete");
const pageInputs = document.querySelectorAll("input");
const pageInputsRadio = document.querySelectorAll("input[type='radio']");
const textArea = document.getElementById("textarea-1");
const checkboxFotos = document.getElementById('concordo-imagens')

console.log(pageInputs);
window.onload = function () {
  btnSend.addEventListener("click", function (e) {
    e.preventDefault();
  });
  btnDelete.addEventListener("click", clearinfo);
  btnSend.addEventListener('click', habilitaSubmit);
  checkboxFotos.addEventListener('change', habilitaSubmit)
};
// ----- LIMPAR DADOS DO FORMS
function clearinfo() {
    for (let index = 0; index < pageInputs.length; index += 1) {
        const element = pageInputs[index];
        if (element.type === 'radio' || element.type === 'checkbox') {
            element.checked = false;
        } else {
            element.value = '';
        }
    }
    textArea.value = "";
}
// ------ FUNÇÃO PARA HABILITAR SUBMIT APENAS COM CHECKED EM COMPARTILHAR IMAGENS
function habilitaSubmit() {
    btnSend.disabled = true;
    if (checkboxFotos.checked === true) {
        btnSend.disabled = false;
    }
};


