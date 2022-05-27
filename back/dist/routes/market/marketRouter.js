"use strict";
var express = require('express');
var router = express.Router();
const statusController = require('./statusController');
const autoController = require('./autoController');
router.post('/status_Show', statusController.status_Show); // 클릭당 골드 1 -> 3
router.post('/typing', statusController.typing); // 강화버튼 클릭
router.post('/auto_Show', autoController.auto_Show);
module.exports = router;
