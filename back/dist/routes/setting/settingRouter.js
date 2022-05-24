"use strict";
var express = require('express');
var router = express.Router();
const settingController = require('./settingController');
router.post('/effect', settingController.effect);
router.post('/back', settingController.back);
module.exports = router;
