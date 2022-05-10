const { Category } = require('../models');

const checkTitle = (req, res, next) => {
  const { title } = req.body;
   if (!title) {
      return res.status(400).json({ message: '"title" is required' });
    }
  
  next();
};
const checkContent = (req, res, next) => {
  const { content } = req.body;
   if (!content) {
      return res.status(400).json({ message: '"content" is required' });
    }
  
  next();
};
const checkCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
   if (!categoryIds) {
      return res.status(400).json({ message: '"categoryIds" is required' });
    }
    const allCategoryIds = await Category.findAll();
    const filteredCategoryIds = allCategoryIds.filter((category) => 
      categoryIds.includes(category.id));
    if (filteredCategoryIds.length === 0) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
  
  next();
};

module.exports = { checkTitle, checkContent, checkCategoryId };