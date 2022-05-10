const { Router } = require('express');
const { createBlogPost } = require('../controllers/blogPostController');
const { checkCategoryId, checkContent, checkTitle } = require('../middlewares/blogPostsMidd');
const { authVerifier } = require('../middlewares/authMidd');

const blogPostRoutes = Router();

blogPostRoutes.post('/post', checkTitle, checkCategoryId, checkContent, 
authVerifier, createBlogPost);

module.exports = blogPostRoutes;