const { Book } = require("../models");

const getAll = async () => {
  const books = await Book.findAll();
  return books
};

const getById = async (bookId) => {
  const book = await Book.findByPk(bookId);

  if (!book) throw { type: 'BOOK_NOT_FOUND', message: 'Book not found' };
  
  return { type: '', message: book };
};

const createBook = async (bookInfo) => {
  const newBook = await Book.create(bookInfo);
  console.log(newBook);
  return { type: '', message: newBook };
};

const updateBook = async (id, { title, author, pageQuantity }) => {
  const book = await Book.findByPk(id);

  if (!book) throw { type: 'BOOK_NOT_FOUND', message: 'Book not found' };

  await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  return { type: '', message: 'Book updated!' };
};

const deleteBook = async (id) => {
  const book = await Book.findByPk(id);

  if (!book) throw { type: 'BOOK_NOT_FOUND', message: 'Book not found' };

  await Book.destroy(
    { where: { id } },
  );

  return { type: '', message: 'Book deleted!' };
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};