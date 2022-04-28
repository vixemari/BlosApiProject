module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Catergories', {
  name: DataTypes.STRING,
  }, {
    timestamps: false,
  }); 
  return Categorie;
};