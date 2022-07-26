/* Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce. Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce. Caso não consiga, olhe a solução abaixo: */

const numbers = [50, 85, -30, 3, 15];

const bigNumber = numbers.reduce(((maior, num) => maior > num ? maior : num),0)
// console.log(bigNumber);

const num = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const pairSumFilterReduce = num.filter((num) => num % 2 === 0).reduce((soma, numPar) => soma + numPar);
const pairSumReduce = num.reduce((soma, numPar) => (numPar % 2 === 0) ? soma + numPar : soma);

console.log(pairSumFilterReduce);
console.log(pairSumReduce);
