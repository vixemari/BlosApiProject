module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostsCategory', {
   categorieId: DataTypes.INTEGER,
  }, { timestamps: false }); 

  return PostCategories;
};