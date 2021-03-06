import { appendFile } from 'fs';

var express = require('express');
var router = express.Router();
const statusController = require('./statusController');
const autoController = require('./autoController');
const expController = require('./expController');

router.post('/status_Show', statusController.status_Show); // 클릭당 골드 1 -> 3
router.post('/typing', statusController.typing);
router.post('/hp', statusController.hp);
router.post('/luck', statusController.luck);
router.post('/patience', statusController.patience);
router.post('/coding', statusController.coding);
router.post('/auto_Show', autoController.auto_Show);
router.post('/auto_Gold', autoController.auto_Gold);
router.post('/auto_Desk', autoController.auto_Desk);
router.post('/auto_Chair', autoController.auto_Chair);
router.post('/auto_Pc', autoController.auto_Pc);
router.post('/auto_Cook', autoController.auto_Cook);
router.post('/auto_Homekeeper', autoController.auto_Homekeeper);
router.post('/auto_Cheer', autoController.auto_Cheer);
router.post('/auto_Vehicle', autoController.auto_Vehicle);
router.post('/exp_Show', expController.exp_Show)
router.post('/exp_Dog', expController.exp_Dog);
router.post('/exp_Cat', expController.exp_Cat);
router.post('/exp_Fish', expController.exp_Fish);
router.post('/exp_Bird', expController.exp_Bird);
router.post('/guage_Exp', expController.guage_Exp);

module.exports = router;
