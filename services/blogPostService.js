const { BlogPosts, Categorie, User } = require('../models');

const createBlogPost = async (blogPostContent) => {
  const { title, content, userId, categoryId } = blogPostContent;

   const idCategorie = await Promise.all(
     categoryId.map(async (id) => {
        const idReturned = await Categorie.findOne({ where: { id } });
        console.log(idReturned);
        if (!idReturned) {
          return false;
        }
        return idReturned.id;
      }),
   );
   const blogPost = await BlogPosts.create({ title, content, userId });
    await blogPost.setCategories(idCategorie);

    return blogPost;
};

const findAllBlogPosts = async () => {
  const blogPosts = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user' }, 
      { model: Categorie, as: 'categories', through: { attributes: [] },
    }],
  });
  return blogPosts;
};

module.exports = { createBlogPost, findAllBlogPosts };