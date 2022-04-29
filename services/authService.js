// const jwt = require('jsonwebtoken');
// const { User } = require('../models');
// require('dotenv').config();

// const secretKey = process.env.SECRET;

// const jwtConfig = {
//   expiresIn: '7d  ',
//   algorithm: 'HS256',
// };

// const genToken = () => {
//   const token = jwt.sign({ data: User }, secretKey, jwtConfig);

//   return token;
// };

// module.exports = { genToken };