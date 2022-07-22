function encode(string) {
  // seu código aqui
  let novaPalavra = string.split("");
  for (let index = 0; index < novaPalavra.length; index += 1) {
    if (novaPalavra[index] === "a") {
      novaPalavra[index] = 1;
    } else if (novaPalavra[index] === "e") {
      novaPalavra[index] = 2;
    } else if (novaPalavra[index] === "i") {
      novaPalavra[index] = 3;
    } else if (novaPalavra[index] === "o") {
      novaPalavra[index] = 4;
    } else if (novaPalavra[index] === "u") {
      novaPalavra[index] = 5;
    }
  }
  return novaPalavra.join("");
}

function decode(string) {
  // seu código aqui
  let novaPalavra = string.split("");
  for (let index = 0; index < novaPalavra.length; index += 1) {
    if (novaPalavra[index] === "1") {
      novaPalavra[index] = "a";
    } else if (novaPalavra[index] === "2") {
      novaPalavra[index] = "e";
    } else if (novaPalavra[index] === "3") {
      novaPalavra[index] = "i";
    } else if (novaPalavra[index] === "4") {
      novaPalavra[index] = "o";
    } else if (novaPalavra[index] === "5") {
      novaPalavra[index] = "u";
    }
  }
  return novaPalavra.join("");
}

module.exports = {encode, decode};
