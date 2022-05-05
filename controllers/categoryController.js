const categorieService = require('../services/categorysService');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const categorie = await categorieService.createCategory(name);
    // console.log();
    return res.status(201).json(categorie);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

module.exports = { createCategory };