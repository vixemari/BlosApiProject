const { Router } = require('express');
const { create, getAll, getById } = require('../controllers/userController');
const { checkDisplayName, checkEmail, checkPassword } = require('../middlewares/userMidd');
const { authVerifier } = require('../middlewares/authMidd');

const userRoutes = Router();

userRoutes.post('/user', checkDisplayName, checkEmail, checkPassword, create);
userRoutes.get('/user', authVerifier, getAll);
userRoutes.get('/user/:id', authVerifier, getById);

module.exports = userRoutes;