function verificaMaior(array) {
    let maiorValor = 0;
    for (let index = 0; index < array.length; index++) {
        if (maiorValor < array[index]) {
            maiorValor = array[index];
        }
    }
    return maiorValor;
}

function maiorIndice(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
        if (numeros[indiceMaior] < numeros[indice]) {
            indiceMaior = indice;
            
        }
    }
    return indiceMaior
}


console.log(verificaMaior([2, 3, 6, 7, 10, 1]));
console.log(maiorIndice([2, 3, 6, 7, 10, 1]));
