const sorteio = () => {
    let num = Math.floor(Math.random()*6)
    return num;
}

const hof = (aposta, callback) => {
    return aposta === callback() ? 'Parabéns você ganhou' : 'Tente de novo!';
};

console.log(hof(4, sorteio));


////////////
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));