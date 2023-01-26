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

const create = async (bookInfo) => {
  const newBook = await Book.create(bookInfo);
  console.log(newBook);
  return { type: '', message: newBook };
};

module.exports = {
  getAll,
  getById,
  create,
};