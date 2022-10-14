const hydrate = (bebidasTomadas) => {
    let numberString = bebidasTomadas.match(/\d+/g);
    let soma = 0;
    for(let valor of numberString) {
        soma += parseInt(valor);
    }
    return (soma > 1 ? `${soma} copos de água` : `${soma} copo de água`) ;
}

module.exports = hydrate;