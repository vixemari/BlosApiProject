module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('User', {
    name: DataTypes.STRING,   
  },
   { timestamps: false });
   
  return Categories;
}; 