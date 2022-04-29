const userService = require('../services/userServices');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await userService.createUser(displayName, email, password, image);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

module.exports = { create };