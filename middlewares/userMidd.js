const { User } = require('../models');

const checkDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

  const regexValidation = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!regexValidation.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const findEmail = await User.findOne({ where: { email } });
  if (findEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password === '') {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = { checkDisplayName, checkEmail, checkPassword };