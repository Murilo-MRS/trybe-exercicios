const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { message } = await BookService.getById(id);
    res.status(200).json(message);
  } catch (error) {
    next(error);
  };

};

const createBook = async (req, res, next) => {

  try {
    const { message } = await BookService.createBook(req.body);
    res.status(201).json(message);
  } catch (error) {
    next(error);
  };
};

const updateBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { message } = await BookService.updateBook(id, req.body);
    res.status(200).json({ message });
  } catch (error) {
    next(error);
  };
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { message } = await BookService.deleteBook(id);
    res.status(200).json({ message });
  } catch (error) {
    next(error);
  };
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};
