const express = require('express');
const { validateName, validatePrice, validateDescription } = require('./middlewares/index');

const app = express();

app.use(express.json());

// const dataPath = path.resolve(__dirname,)

// app.get('/teams', (req, res) => res.json(teams));

app.get('/activities', (req, res) => res.status(200).json({ message: 'OK' }));

app.post('/activities', validateName, validatePrice, validateDescription, (_req, res) => {
  return res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

// app.put('/teams/:id', validateTeam, (req, res) => {

// });

// app.delete('/teams/:id', (req, res) => {

// });

module.exports = app;
