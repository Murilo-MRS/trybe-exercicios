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

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFile();
    if (q) {
      const filteredMovies = movies.filter((element) => element.movie.toLowerCase().includes(q));
      return res.status(200).json(filteredMovies);
    }
  res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

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

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    // buscar index do filme
    const index = movies.findIndex((element) => element.id === Number(id));

    if (!index) {
      res.status(404).send({ message: 'This id do not exist' });
    };
    // atualiza o array pelo index
    movies[index] = { id: Number(id), movie, price };
    // reescreve no arquivo json
    const updatedMovies = JSON.stringify(movies, null, 2);

    await fs.writeFile(moviesPath, updatedMovies);
    // response
    res.status(200).json(movies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params
  try {
    const movies = await readFile();
    // buscar index do filme
    const index = movies.find((element) => element.id === Number(id));

    if (!index) {
      res.status(404).send({ message: 'This id do not exist' });
    };
    // atualiza o array pelo index
    const newArrayAfterDelete = movies.filter((e) => e.id !== +id)
    // reescreve no arquivo json
    const updatedMovies = JSON.stringify(newArrayAfterDelete, null, 2);

    await fs.writeFile(moviesPath, updatedMovies);
    // response
    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
