var express = require('express');
var router = express.Router();
const gameController = require('./gameController');

router.post('/user', gameController.user);
router.post('/click', gameController.click);
router.post('/gold_exp', gameController.gold_exp);
router.post('/hpDown', gameController.hpDown);
router.post('/bug', gameController.bug);

module.exports = router;
