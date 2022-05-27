var express = require('express');
var router = express.Router();
const gameController = require('./gameController');

router.post('/user', gameController.user);
router.post('/click', gameController.click);

module.exports = router;
