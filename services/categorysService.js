const { Category } = require('../models');

const createCategory = async (name) => {
  const categorie = await Category.create(name);
  return { id: categorie.id, name };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, getAllCategories };