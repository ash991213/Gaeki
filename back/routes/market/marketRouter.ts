var express = require('express');
var router = express.Router();
const statusController = require('./statusController');

router.post('/show', statusController.show); // 클릭당 골드 1 -> 3
router.post('/typing', statusController.typing); // 강화버튼 클릭

module.exports = router;
