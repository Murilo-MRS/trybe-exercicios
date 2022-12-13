const express = require('express');
const { validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt } = require('./middlewares/index');

const app = express();

app.use(express.json());

app.get('/activities', (req, res) => res.status(200).json({ message: 'OK' }));

app.post('/activities',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  (_req, res) => res.status(201).json({ message: 'Atividade cadastrada com sucesso!' }));

module.exports = app;
