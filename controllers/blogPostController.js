const blogPostService = require('../services/blogPostService');

const createBlogPost = async (req, res) => {
  try {
    const userId = req.user.id;
  const { title, content, categoryIds } = req.body;
  const blogPost = await blogPostService.createBlogPost(title, content, userId, categoryIds);
  res.status(201).json(blogPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createBlogPost };
