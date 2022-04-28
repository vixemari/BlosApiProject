module.exports = (sequelize, DataTypes) => {
  const postCategories = sequelize.define('PostCategories', {
   categorieId: DataTypes.INTEGER,
  }, { timestamps: false }); 
  return postCategories;
};