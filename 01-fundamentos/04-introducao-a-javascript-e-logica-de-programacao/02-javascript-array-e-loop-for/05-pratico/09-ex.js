let array = [];

for (let index = 1; index <= 25; index++) {
  array.push(index);
}

console.log(array);
// COM FOR OF
// for (let divisao of array) {
//     divisao = divisao / 2
//     console.log(divisao);
// }
let divisao = [];
for (let index = 0; index < array.length; index++) {
  divisao.push(array[index] / 2)
}
console.log(divisao);