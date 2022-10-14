let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [2,2,2,2,2,2,2,2,2,2];
let impares = [];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 != 0) {
    impares.push(numbers[index]);
  }
}
if (impares.length === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
  console.log(impares);
  console.log("Numeros impares:" + impares.length);
}
