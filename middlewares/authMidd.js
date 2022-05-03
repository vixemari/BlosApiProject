const jwt = require('jsonwebtoken');

const secretKey = 'palavraSecreta';

const authVerifier = (req, res, next) => {
  const token = req.headers.authorization;
  // console.log(token);
  if (!token || token === '') {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.data;
    next();
  } catch (error) {
    // console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { authVerifier };
