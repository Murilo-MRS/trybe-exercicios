const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo name é obrigatório' });
  }
  if (name.length < 4) {
    return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  }
  next();
};

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) {
    return res.status(400).json({ message: 'O campo price é obrigatório' });
  }
  if (price < 0 || typeof price !== 'number') {
    return res.status(400)
      .json({ message: 'O campo price deve ser um número maior ou igual a zero' });
  }
  next();
};

const validateDescriptionKeys = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;
  return validateDescriptionKeys(description, res, 'description')
    || validateDescriptionKeys(description.createdAt, res, 'createdAt')
    || validateDescriptionKeys(description.rating, res, 'rating')
    || validateDescriptionKeys(description.difficulty, res, 'difficulty')
    || next();
};

const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato dd/mm/aaaa' });
  }
  next();
}; 

const validateRating = (req, res, next) => {
  const { rating } = req.body.description;

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
  next();
}; 

const validateDifficulty = (req, res, next) => {
  const { difficulty } = req.body.description;
  const classifications = ['Fácil', 'Médio', 'Difícil'];

  if (!classifications.includes(difficulty)) {
    return res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }
  next();
}; 

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
};
