const loginService = require('../services/loginService');

const createLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const login = await loginService.createLogin(email, password);
    if (!login) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    return res.status(200).json({ token: login });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

module.exports = { createLogin };