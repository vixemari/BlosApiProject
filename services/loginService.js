const { User } = require('../models');
const { genToken } = require('./authService');

const createLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return null;
  }
  const token = genToken(user);
  return token;
};

module.exports = { createLogin };