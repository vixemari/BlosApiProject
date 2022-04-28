module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
   categorieId: DataTypes.INTEGER,
  }, { timestamps: false }); 
  return PostCategories;
};