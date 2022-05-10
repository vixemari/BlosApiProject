module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostsCategory', {
   categorieId: DataTypes.INTEGER,
  }, { timestamps: false }); 

  PostCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
  });
  models.Categorie.belongsToMany(models.BlogPost, {
    as: 'blogposts',
    through: PostCategories,
    foreignKey: 'categoryId',
    otherKey: 'postId',
  });
  };
  return PostCategories;
};