var express = require('express');
var router = express.Router();
const rankingController = require('./rankingController');

router.post('/list', rankingController.list);

module.exports = router;
