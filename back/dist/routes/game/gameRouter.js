"use strict";
var express = require('express');
var router = express.Router();
const userController = require('./gameController');
router.post('/user', userController.user);
module.exports = router;
