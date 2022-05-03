const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = { createUser, getAll };
