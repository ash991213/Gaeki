var express = require('express');
var router = express.Router();
const gameController = require('./gameController');

router.post('/info', gameController.info);
router.post('/click', gameController.click);

module.exports = router;
