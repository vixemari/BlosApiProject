module.exports = (sequelize, DataTypes) => {
  const categorie = sequelize.define('Catergories', {
  name: DataTypes.STRING,
  }, {
    timestamps: false,
  }); 
  return categorie;
};