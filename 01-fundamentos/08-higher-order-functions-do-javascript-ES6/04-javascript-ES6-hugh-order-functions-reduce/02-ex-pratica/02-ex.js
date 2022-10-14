const {books, names} = require("./00-ex-dados");
/*--------- EX 2-------------- */
const reduceNames = (arr) => {
  return arr.reduce((acc, curr, index, array) => {
    return index === array.length - 1
      ? `${acc} ${curr.author.name}.`
      : `${acc} ${curr.author.name},`;
  }, "");
};
// console.log(reduceNames(books));
/*--------- EX 3-------------- */
const averageAge = (arr) => {
  return arr
    .map((element) => element.releaseYear - element.author.birthYear)
    .reduce((acc, curr) => {
      return (acc + curr);
    }, 0) / arr.length;
};
// console.log(averageAge(books));
/*--------- EX 4-------------- */
const longestNamedBook = (arr) => {
    return arr.reduce((acc, curr) => {
        return (acc.name.length > curr.name.length) ? acc : curr;
    })
};
// console.log(longestNamedBook(books));
/*--------- EX 5-------------- */
const containsA = (arr) => {
    const asArrays = arr.reduce((acc, curr) => {
        return acc + curr.split('').reduce((acumulador, current) => {
            return (current === 'a' || current === 'A') ? acumulador += 1 : acumulador;
        },0)
    },0);
    return asArrays;
};
console.log(containsA(names));
/*--------- EX 6-------------- */
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const studentAverage = () => {
    let meanOfGrades = grades.map((element) => {
        return element.reduce((acc, curr) => acc + curr,0) / 5;
    })
    return meanOfGrades.map((element, index) => (
        {
            name: students[index],
            average: element,
        }
    ))
};
console.log(studentAverage());

// GABARITO 6
// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const notes = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//   const nameAndAverage = students.map((student, index) => ({
//     name: student,
//     average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),
//   }));
//   return nameAndAverage;
// }
