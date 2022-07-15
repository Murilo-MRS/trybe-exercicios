
// const sum = (value1, value2) => value1 + value2;

// const sum = (value1, value2) => value1 + value2;

// console.log(sum(2, '3')); // resultado: 23
// //////////////////////
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));// RESULTADO ESPERADO COM RETURN MAS A FUNÇÃO 'CONTINUA FUNCIONANDO'
//////////////////
const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3')); //retonaria 23 ao inves de 5.