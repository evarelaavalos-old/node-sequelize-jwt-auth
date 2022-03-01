const express = require('express');

const authRouter = express.Router();

const {
  httpPostSignup,
  httpPostLogin,
  httpGetUserInfo,
  httpGetLogout,
} = require('./auth.controller');

authRouter.post('/signup', httpPostSignup);
authRouter.post('/login', httpPostLogin);
authRouter.get('/me', httpGetUserInfo);
authRouter.get('/logout', httpGetLogout);

module.exports = authRouter;
