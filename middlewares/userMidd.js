const User = require('../models/user');

const checkDisplayName = async (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      error: 'Display name must be at least 8 characters long',
    });
  }
  next();
};
const validateEmail = (email) => {
  const regexValidation = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return regexValidation.test(email);
};

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email || email === '') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Email is not valid' });
  }
  const findEmail = await User.findOne({ where: { email } });
  if (findEmail) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  next();
};

module.exports = { checkDisplayName, checkEmail };