const express = require('express');
// require('express-async-errors');
const { loginRoutes, userRoutes } = require('../src/routes');
const handleErrors = require('./middlewares/errors/handleErrors');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/signup', userRoutes);

app.use(handleErrors)

module.exports = app;
