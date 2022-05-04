const { User } = require('../models');
const { genToken } = require('./authService');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  const token = genToken(user);
  return token;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};
const getById = async (id) => {
  const users = await User.findOne({ where: { id } });
  return users;
};

module.exports = { createUser, getAll, getById };
