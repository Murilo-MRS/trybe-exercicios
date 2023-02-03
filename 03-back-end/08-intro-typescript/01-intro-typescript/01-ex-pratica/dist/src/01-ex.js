"use strict";
const numberInput = 7;
const isItAPrime = (param) => {
    for (let i = 2; i < param; i++)
        if (param % i === 0) {
            return false;
        }
    return param > 1;
};
isItAPrime(numberInput)
    ? console.log(`${numberInput} é primo`)
    : console.log(`${numberInput} não é primo`);
// Função 2
const emailInput = 'email@email.com';
const validateEmailFormat = (param) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(param);
};
console.log(validateEmailFormat(emailInput));
// Função 3
const numberList = [10, 5, 18, 2, 8, 23];
const sortInput = (param) => {
    return param.sort(function (a, b) { return a - b; });
};
console.log(sortInput(numberList));
// Função 4
const peopleInput = {
    name: 'Rui',
    age: 23,
};
const createSimpleSentence = (param) => {
    return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
};
console.log(createSimpleSentence(peopleInput));
// Função 5
const ageInput = 15;
const isOfLegalAge = (param) => {
    return !!param;
};
ageInput >= 18
    ? console.log(isOfLegalAge('true'))
    : console.log(isOfLegalAge(false));
