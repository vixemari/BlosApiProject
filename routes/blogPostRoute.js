const { Router } = require('express');
const { createBlogPost, findAllBlogPosts } = require('../controllers/blogPostController');
const { checkCategoryId, checkContent, checkTitle } = require('../middlewares/blogPostsMidd');
const { authVerifier } = require('../middlewares/authMidd');

const blogPostRoutes = Router();

blogPostRoutes.post('/post', checkTitle, checkCategoryId, checkContent, 
authVerifier, createBlogPost);
blogPostRoutes.get('/post', authVerifier, findAllBlogPosts);

module.exports = blogPostRoutes;