"use strict";
var express = require('express');
var router = express.Router();
const statusController = require('./statusController');
const autoController = require('./autoController');

router.post('/status_Show', statusController.status_Show); // 클릭당 골드 1 -> 3
router.post('/typing', statusController.typing);
router.post('/hp', statusController.hp);
router.post('/luck', statusController.luck);
router.post('/patience', statusController.patience);
router.post('/coding', statusController.coding);
router.post('/auto_Show', autoController.auto_Show);
router.post('/auto_Desk', autoController.auto_Desk);

module.exports = router;
