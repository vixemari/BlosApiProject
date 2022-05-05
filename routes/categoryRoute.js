const { Router } = require('express');
const { createCategory } = require('../controllers/categoryController');
const { authVerifier } = require('../middlewares/authMidd');
const { checkName } = require('../middlewares/categoryMidd');

const categoryRoutes = Router();
categoryRoutes.post('/categories', authVerifier, checkName, createCategory);

module.exports = categoryRoutes;