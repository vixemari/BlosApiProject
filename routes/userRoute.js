const { Router } = require('express');
const { create, getAll } = require('../controllers/userController');
const { checkDisplayName, checkEmail, checkPassword } = require('../middlewares/userMidd');
const { authVerifier } = require('../middlewares/authMidd');

const userRoutes = Router();

userRoutes.post('/user', checkDisplayName, checkEmail, checkPassword, create);
userRoutes.get('/user', authVerifier, getAll);

module.exports = userRoutes;