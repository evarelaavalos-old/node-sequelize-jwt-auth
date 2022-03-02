const express = require('express');

const { checkUser } = require('../../middlewares/authMiddleware');

const authRouter = express.Router();

const {
  httpPostSignup,
  httpPostLogin,
  httpGetUserInfo,
  httpGetLogout,
} = require('./auth.controller');

authRouter.post('/signup', httpPostSignup);
authRouter.post('/login', httpPostLogin);
authRouter.get('/me', checkUser, httpGetUserInfo);
authRouter.get('/logout', httpGetLogout);

module.exports = authRouter;
