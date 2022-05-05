const { Categorie } = require('../models');

const createCategory = async (name) => {
  const categorie = await Categorie.create(name);
  return { id: categorie.id, name };
};

const getAllCategories = async () => {
  const categories = await Categorie.findAll();
  return categories;
};

module.exports = { createCategory, getAllCategories };