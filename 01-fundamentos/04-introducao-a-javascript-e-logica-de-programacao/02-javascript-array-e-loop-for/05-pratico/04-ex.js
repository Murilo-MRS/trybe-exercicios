let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
}

let media = soma / numbers.length;
console.log(media);

if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

// Com 1 IF
// let asd ="valor menor ou igual a 20";

// if (media > 20) {
//     asd = "valor maior que 20";
// }
// console.log(asd);