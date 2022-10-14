const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten(arr) {
  // escreva seu código aqui
  return arr.reduce((acc, curr) => {
    curr.forEach((element) => {
      acc.push(element);
    });
    return acc;
}, []);
}
console.log(flatten(arrays));
