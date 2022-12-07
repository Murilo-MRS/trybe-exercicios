const readlineSync = require('readline-sync');

const bmi = (weight, height) => {
  const heightInMeter = height / 100
  const result = (weight / (heightInMeter ** 2)).toFixed(2);
  return result;
};

const main = () => {
  const weight = readlineSync.questionFloat('what is your weight(kg)? ');
  const height = readlineSync.questionInt('what is your height(cm)? ');
  console.log(`Your BMI is: `,bmi(weight, height));
}

main();