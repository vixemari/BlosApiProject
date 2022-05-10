const blogPostService = require('../services/blogPostService');

const createBlogPost = async (req, res) => {
  try {
    const userId = req.user.id;
  const { title, content, categoryIds } = req.body;
  const blogPost = await blogPostService.createBlogPost(title, content, userId, categoryIds);
  res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const findAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await blogPostService.findAllBlogPosts();
    return res.status(200).json(blogPosts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { createBlogPost, findAllBlogPosts };
