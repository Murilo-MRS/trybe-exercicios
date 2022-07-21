const sorteio = () => {
    let num = Math.floor(Math.random()*6)
    return num;
}

const hof = (aposta, callback) => {
    let retorno = "Tente novamente"
    if (aposta === callback()) {
        retorno = "Parabéns você ganhou"
    };
    return console.log(retorno);
};

console.log(hof(2, sorteio));