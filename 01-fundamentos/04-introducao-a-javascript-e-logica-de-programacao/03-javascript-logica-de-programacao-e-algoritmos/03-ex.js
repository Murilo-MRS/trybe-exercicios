let array = ['java', 'javascript', 'python', 'html', 'css'];
let arrLengthMaior = array[0];
let arrLengthMenor = array[0];

for (let index = 0; index < array.length; index++) {
    if (array[index].length > arrLengthMaior.length) {
        arrLengthMaior = array[index];
    }
}
console.log(arrLengthMaior);

for (let index = 0; index < array.length; index++) {
    if (array[index].length < arrLengthMenor.length) {
        arrLengthMenor = array[index];
    }
}

console.log(arrLengthMenor);
