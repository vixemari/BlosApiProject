const { BlogPosts, Categorie } = require('../models');

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

     console.log(blogPost);
    return blogPost;
};

module.exports = { createBlogPost };