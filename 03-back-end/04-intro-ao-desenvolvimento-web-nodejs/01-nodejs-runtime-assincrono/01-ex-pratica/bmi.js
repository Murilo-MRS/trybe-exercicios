const bmi = (weight, height) => {
  const heightInMeter = height / 100
  return weight / (heightInMeter ** 2)
};

console.log(bmi(87, 177));
