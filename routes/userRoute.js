const { Router } = require('express');
const { create } = require('../controllers/userController');
const { checkDisplayName, checkEmail, checkPassword } = require('../middlewares/userMidd');

const userRoutes = Router();

userRoutes.post('/user', checkDisplayName, checkEmail, checkPassword, create);

module.exports = userRoutes;