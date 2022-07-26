const books = require("./00-ex-dados");

const reduceNames = (arr) => {
  return arr.reduce((acc, curr, index, array) => {
    return (index === array.length -1) ? `${acc} ${curr.author.name}.` : `${acc} ${curr.author.name},`
  },'');
};
console.log(reduceNames(books));