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
//-----EX 1
const formatedBookNames = (arr) => {
  // escreva seu código aqui
  return arr.map(
    (element) => `${element.name} - ${element.genre} - ${element.author.name}`
  );
};
// console.log(formatedBookNames(books));
//-----EX 2
const nameAndAge = (arr) => {
  // escreva seu código aqui
  return arr
    .map((element) => ({
      age: element.releaseYear - element.author.birthYear,
      author: element.author.name,
    }))
    .sort((a, b) => (a.age > b.age ? 1 : -1));
};
// console.log(nameAndAge(books));
//-----EX 3
const fantasyOrScienceFiction = (arr) => {
  // escreva seu código aqui
  return arr.filter(
    (element) =>
      element.genre === "Fantasia" || element.genre === "Ficção Científica"
  );
};
// console.log(fantasyOrScienceFiction(books));

//-----EX 4
const oldBooksOrdered = (arr) => {
  // escreva seu código aqui
  return arr
    .filter((element) => 2022 - element.releaseYear >= 60)
    .sort((a, b) => (a.releaseYear > b.releaseYear ? 1 : -1));
};
// console.log(oldBooksOrdered(books));
//-----EX 5
const fantasyOrScienceFictionAuthors = (callback, arr) => {
  return callback(arr).map((element) => element.author.name).sort();
};
// console.log(fantasyOrScienceFictionAuthors(fantasyOrScienceFiction, books));
//-----EX 6
const oldBooks = (callback, arr) => {
    return callback(arr).map((element) => element.name)
}
console.log(oldBooks(oldBooksOrdered, books));
//-----EX 7
