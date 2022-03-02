const db = require('../models');
const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized',
    });
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

async function checkUser(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized',
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await db.User.findByPk(decodedToken.id);
    res.locals.user = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

module.exports = { requireAuth, checkUser };
