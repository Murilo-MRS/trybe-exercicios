const bookController = require('../controllers/book.controller');
const express = require('express');
const router = express.Router()

router.get('/', bookController.getAll);

router.get('/:id', bookController.getById);

router.post('/', bookController.createBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.deleteBook);

module.exports = router;
