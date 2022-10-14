
function palindromo(word) {

  let reverso = word.split('').reverse().join('');

  if (reverso === word) {
    return true;
  } else {
    return false;
  }
}

console.log('Primeira: ' + palindromo('arara'));
console.log('Segunda: ' + palindromo('josney'));
