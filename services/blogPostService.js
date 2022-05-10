const { BlogPost, Category, User } = require('../models');

const createBlogPost = async (blogPostContent) => {
  const { title, content, userId, categoryId } = blogPostContent;

   const blogPost = await BlogPost.create({ title, content, userId });
     blogPost.addCategory(categoryId);

    return blogPost;
};

const findAllBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' }, 
      { model: Category, as: 'categories', through: { attributes: [] },
    }],
  });
  return blogPosts;
};

module.exports = { createBlogPost, findAllBlogPosts };