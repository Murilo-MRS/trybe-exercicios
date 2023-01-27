const express = require('express');
const userController = require('../controllers/user.controller');

const routers = express.Router();

routers.post('/', userController.signup);

module.exports = routers;