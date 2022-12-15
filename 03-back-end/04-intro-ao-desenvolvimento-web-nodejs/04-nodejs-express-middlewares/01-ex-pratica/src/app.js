const express = require('express');
const { validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
} = require('./middlewares/index');
const auth = require('./middlewares/auth');
const generateToken = require('./utils/generateToken');

const app = express();

app.use(express.json());

app.get('/activities', (req, res) => res.status(200).json({ message: 'OK' }));

app.post('/activities',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (_req, res) => res.status(201).json({ message: 'Atividade cadastrada com sucesso!' }));

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = app;
