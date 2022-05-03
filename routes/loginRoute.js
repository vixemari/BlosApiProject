const { Router } = require('express');
const { createLogin } = require('../controllers/loginController');
const { checkEmail, checkPassword } = require('../middlewares/loginMidd');

const loginRoutes = Router();

loginRoutes.post('/login', checkEmail, checkPassword, createLogin);

module.exports = loginRoutes;