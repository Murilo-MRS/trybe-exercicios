const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

///// exercicio 1
const authorBornIn1947 = (born) => {
  return books.find((element) => element.author.birthYear === born).author.name;
};
// LEMBRAR SEMPPRE DO RETURN
///// exercicio 2
function smallerName() {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
///// exercicio 3
function getNamedBook(characters) {
  // escreva seu código aqui
  let nameBook = "";
  books.find((element) => {
    if (element.name.length === characters) nameBook = element.name;
  });
  return nameBook;
}

///// exercicio 4
function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  books.sort((a, b) => (a.releaseYear < b.releaseYear ? 1 : -1));
}

///// exercicio 5
function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((element) => element.author.birthYear > 1900);
}

///// exercicio 6
function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some(
    (element) => element.releaseYear >= 1980 && element.releaseYear < 1990
  );
}
///// exercicio 7
function authorUnique() {
  // escreva seu código aqui
  return books.every((element) => element.author.birthYear !== 1950);
}
console.log(authorUnique());

// const expectedResult = false;

// function authorUnique() {
//   return books.every((book) =>
//     !books.some((bookSome) =>
//       (bookSome.author.birthYear === book.author.birthYear)
//       && (bookSome.author.name !== book.author.name)));
// }