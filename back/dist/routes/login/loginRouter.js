"use strict";
var express = require('express');
var router = express.Router();
const loginController = require('./loginController');
router.get('/login', loginController.login);
router.get('/redirectLogin', loginController.redirectLogin);
module.exports = router;
