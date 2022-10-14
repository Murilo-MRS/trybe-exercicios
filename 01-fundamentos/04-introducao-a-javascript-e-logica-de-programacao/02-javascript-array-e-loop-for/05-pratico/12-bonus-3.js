let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMulti = [];

for (let index = 0; index < numbers.length; index++) {
  let element = numbers[index];
  if (numbers[index + 1] !== undefined) {
    element *= numbers[index + 1];
    numbersMulti.push(element)
  } else {
    element *= 2
    numbersMulti.push(element)
  }
  
}

  console.log(numbers);
  console.log(numbersMulti);