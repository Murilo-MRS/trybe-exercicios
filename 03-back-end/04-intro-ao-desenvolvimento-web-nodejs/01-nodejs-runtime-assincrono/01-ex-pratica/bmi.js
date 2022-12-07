const readlineSync = require('readline-sync');

const weight = readlineSync.question('what is your weight(kg)? ');
const height = readlineSync.question('what is your height(cm)? ');


const bmi = (weight, height) => {
  const heightInMeter = height / 100
  const result = (weight / (heightInMeter ** 2)).toFixed(2);
  return result;
};

console.log(`Your BMI is: `,bmi(weight, height));
