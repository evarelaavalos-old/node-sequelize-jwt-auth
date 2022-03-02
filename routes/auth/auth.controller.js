const jwt = require('jsonwebtoken');

const MAX_AGE = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: MAX_AGE,
  });
};

async function httpPostSignup(req, res) {
  // @TODO Implement this function
  res.status(200).json({ ok: true });
}

async function httpPostLogin(req, res) {
  // @TODO Implement this function

  // Placeholder to test token creation
  const token = createToken(1);
  res.status(200).json({ token });
}

async function httpGetUserInfo(req, res) {
  const user = res.locals.user;
  return res.status(200).json(user);
}

async function httpGetLogout(req, res) {
  // @TODO Implement this function
  res.status(200).json({ ok: true });
}

module.exports = {
  httpPostSignup,
  httpPostLogin,
  httpGetUserInfo,
  httpGetLogout,
};
