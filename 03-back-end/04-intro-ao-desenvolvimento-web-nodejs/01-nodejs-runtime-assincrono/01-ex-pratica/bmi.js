const readlineSync = require('readline-sync');

const bmi = (weight, height) => {
  const heightInMeter = height / 100;
  const result = (weight / heightInMeter ** 2).toFixed(2);
  return result;
};

const BMI_MAX_AND_MIN = {
  Underweight: {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  Overweight: {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

const handleBMIresult = (bmi) => {
  const statuses = Object.keys(BMI_MAX_AND_MIN);
  const findResult = statuses.find((status) => {
    const {maxBMI, minBMI} = BMI_MAX_AND_MIN[status];
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return findResult;
};

const main = () => {
  const weight = readlineSync.questionFloat('what is your weight(kg)? ');
  const height = readlineSync.questionInt('what is your height(cm)? ');
  const bmiResult = bmi(weight, height);

  console.log(`Your BMI is: `, bmiResult);
  console.log(`BMI result: `, handleBMIresult(bmiResult));
};

main();
