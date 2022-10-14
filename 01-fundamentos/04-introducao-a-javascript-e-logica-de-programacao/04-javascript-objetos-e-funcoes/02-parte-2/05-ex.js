function repete(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (index in numeros) {
        let verificaNumero = numeros[index];
        for (const index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}

console.log(repete([2, 3, 2, 5, 8, 2, 3]));
