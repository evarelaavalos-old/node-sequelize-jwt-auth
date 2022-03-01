const db = require('../../models');

async function httpPostSignup(req, res) {
  // @TODO Implement this function
  res.status(200).json({ ok: true });
}

async function httpPostLogin(req, res) {
  // @TODO Implement this function
  res.status(200).json({ ok: true });
}

async function httpGetUserInfo(req, res) {
  // @TODO Implement this function
  res.status(200).json({ ok: true });
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