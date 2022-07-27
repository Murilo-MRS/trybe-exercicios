const books = require("./00-ex-dados");
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
console.log(averageAge(books));
/*--------- EX 4-------------- */
const longestNamedBook = (arr) => {
    return arr.reduce((acc, curr) => {
        return (acc.name.length > curr.name.length) ? acc : curr;
    })
};
console.log(longestNamedBook(books));
/*--------- EX 5-------------- */
const containsA = (arr) => {
    
};
/*--------- EX 6-------------- */
const studentAverage = () => {};
