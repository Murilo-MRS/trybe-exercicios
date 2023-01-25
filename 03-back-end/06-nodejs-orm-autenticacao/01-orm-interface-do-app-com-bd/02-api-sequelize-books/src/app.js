const express = require('express');
const BooksController = require('./controllers/book.controller');
const app = express();

app.use(express.json());

app.get('/books', BooksController.getAll)

module.exports = app;

