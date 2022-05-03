// require('dotenv').config();
const jwt = require('jsonwebtoken');

const secretKey = 'palavraSecreta';

const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const genToken = (user) => {
  const token = jwt.sign({ data: user }, secretKey, jwtConfig);
  return token;
};

module.exports = { genToken };  