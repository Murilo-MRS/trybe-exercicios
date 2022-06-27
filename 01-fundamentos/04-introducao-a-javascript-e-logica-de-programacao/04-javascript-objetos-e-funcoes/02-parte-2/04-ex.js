function maiorString(nomes) {
    let indexMaior = nomes[0];
    for (let index = 0; index < nomes.length; index += 1){
    if (indexMaior.length < nomes[index].length) {
        indexMaior = nomes[index];
    }
}
    return indexMaior;
};

console.log(maiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
