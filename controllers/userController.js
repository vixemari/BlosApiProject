const userService = require('../services/userServices');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await userService.createUser({ displayName, email, password, image });
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).end();
  }
};
const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).end();
  }
};
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).end();
  }
};

module.exports = { create, getAll, getById };
