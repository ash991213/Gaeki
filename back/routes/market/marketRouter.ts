var express = require('express');
var router = express.Router();
const statusController = require('./statusController');

router.post('/show', statusController.show);
router.post('/typing', statusController.typing);
router.post('/hp', statusController.hp);
router.post('/luck', statusController.luck);
router.post('/patience', statusController.patience);
router.post('/coding', statusController.coding);

module.exports = router;
