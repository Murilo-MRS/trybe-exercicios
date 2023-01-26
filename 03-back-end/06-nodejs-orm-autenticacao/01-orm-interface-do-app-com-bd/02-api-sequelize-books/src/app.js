const express = require('express');
const handleErrors = require('./middlewares/errors/handleErrors');
const { booksRouter } = require('./routes');
const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.use(handleErrors);

module.exports = app;
