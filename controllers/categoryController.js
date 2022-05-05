const categorieService = require('../services/categorysService');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const categorie = await categorieService.createCategory(name);
    return res.status(201).json(categorie);
  } catch (error) {
    return res.status(500).end();
  }
};

const findAllCategories = async (req, res) => {
  try {
    const categories = await categorieService.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).end();
  }
    };

module.exports = { createCategory, findAllCategories };