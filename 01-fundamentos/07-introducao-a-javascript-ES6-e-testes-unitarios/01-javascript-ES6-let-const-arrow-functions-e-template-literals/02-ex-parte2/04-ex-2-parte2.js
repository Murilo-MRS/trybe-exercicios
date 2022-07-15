const longestWord = (frase) => {
    const arrayPalavra = frase.split(' ');
    let aux = 0;
    let resultado = '';
    for (let index = 0; index < arrayPalavra.length; index += 1) {
        const element = arrayPalavra[index];
        if (element.length > aux)  {
            aux = element.length
            resultado = arrayPalavra[index];
        }
    }
    return `${resultado} e com tamanho ${aux}`;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
 // retorna 'aconteceu'
// com FOR OF
const maiorPalavra = (frase) => {
    const arrayPalavra = frase.split(' ');
    let aux = 0;
    let resultado = '';
    for(let palavra of arrayPalavra) {
        if (palavra.length > aux) {
            aux = palavra.length;
            resultado = palavra;
        }
    }
    return `${resultado} e com tamanho ${aux}`;
}
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));
