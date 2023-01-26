const bookController = require('../controllers/book.controller');
const express = require('express');
const router = express.Router()

router.get('/', bookController.getAll);

router.get('/:id', bookController.getById);

router.post('/', bookController.create);

router.put('/:id', bookController.update);

module.exports = router;
