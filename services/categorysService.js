const { Categorie } = require('../models');

const createCategory = async (name) => {
  const categorie = await Categorie.create(name);
  console.log(categorie);
  return { id: categorie.id, name };
};

module.exports = { createCategory };