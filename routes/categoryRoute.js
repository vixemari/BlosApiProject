const { Router } = require('express');
const { createCategory, findAllCategories } = require('../controllers/categoryController');
const { authVerifier } = require('../middlewares/authMidd');
const { checkName } = require('../middlewares/categoryMidd');

const categoryRoutes = Router();
categoryRoutes.post('/categories', authVerifier, checkName, createCategory);
categoryRoutes.get('/categories', authVerifier, findAllCategories);

module.exports = categoryRoutes;