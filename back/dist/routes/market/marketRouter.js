"use strict";
var express = require('express');
var router = express.Router();
const asdf = require('./statController');
router.post('/stat', asdf.typing);
// router.post('/auto_gold', marketController.typing);
// router.post('/auto_exp', marketController.typing);
module.exports = router;
