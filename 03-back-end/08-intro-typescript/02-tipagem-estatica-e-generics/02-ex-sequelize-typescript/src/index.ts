import sequelize from 'sequelize';
import Author from './database/models/AuthorModel';
import Genre from './database/models/GenreModel';
import Book from './database/models/BookModel';

/* esse index serve apenas como teste se as funcoes no model funcionam corretamente */
// (async () => {
//   const authors = await Author.findAll();
//   console.table(authors.map((author) => author.toJSON()));

//   process.exit(0);
// })();

// (async () => {
//   const genres = await Genre.findAll();
//   console.table(genres.map((genres) => genres.toJSON()));

//   process.exit(1);
// })();

// (async () => {
//   const books = await Book.findAll();
//   console.table(books.map((book) => book.toJSON()));

//   process.exit(0);
// })();

(async () => {
  const data = await Author.findAll({
    include: {
      model: Book,
      attributes: [],
    },
    attributes: [
      ['name', 'author'],
      [sequelize.fn('COUNT', sequelize.col('books.id')), 'totalBooks'],
  ],
    group: 'authors.name',
    order: [[sequelize.literal('totalBooks'), 'DESC']],
    raw: true,
  });

  console.log(data);
  process.exit(0);
})();