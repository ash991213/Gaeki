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
router.post('/auto_Gold', autoController.auto_Gold);
router.post('/auto_Desk', autoController.auto_Desk);
router.post('/auto_Chair', autoController.auto_Chair);
router.post('/auto_Pc', autoController.auto_Pc);
router.post('/auto_Cook', autoController.auto_Cook);
router.post('/auto_Homekeeper', autoController.auto_Homekeeper);
router.post('/auto_Vehicle', autoController.auto_Vehicle);

module.exports = router;
