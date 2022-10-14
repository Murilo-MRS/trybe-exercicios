function menorIndice(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
        if (numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
            
        }
    }
    return indiceMenor
}


console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));
