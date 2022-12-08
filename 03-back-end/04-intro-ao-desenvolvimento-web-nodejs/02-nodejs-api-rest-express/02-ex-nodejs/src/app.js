const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, './movies.json');
app.use(express.json());

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.get('/movies', async (_req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const movies = await readFile();
    const movieById = movies.find((e) => e.id === +id);
    if (!movieById) {
      res.status(404).send({ message: 'This id do not exist' });
    }
    res.status(200).json(movieById);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
