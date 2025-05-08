// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

// const isAuthenticated = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).send({ message: 'Unauthorized: No token provided' });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = { id: decoded.id };
//     next();
//   } catch (error) {
//     res.status(401).send({ message: 'Unauthorized: Invalid token', error: error.message });
//   }
// };

// module.exports = isAuthenticated;


const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized: Invalid token', error: error.message });
  }
};

module.exports = isAuthenticated;
