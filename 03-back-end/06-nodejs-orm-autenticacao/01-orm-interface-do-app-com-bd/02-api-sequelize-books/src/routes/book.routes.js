const bookController = require('../controllers/book.controller');
const express = require('express');
const router = express.Router()

router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.create);

module.exports = router;
