"use strict";
var express = require('express');
var router = express.Router();
const SettingRouter = require('./setting/settingRouter');
const RankingRouter = require('./ranking/rankingRouter');
const gameRouter = require('./game/gameRouter');
const marketRouter = require('./market/marketRouter');
const LoginRouter = require('./login/loginRouter');
router.use('/game', gameRouter);
router.use('/setting', SettingRouter);
router.use('/ranking', RankingRouter);
router.use('/market', marketRouter);
router.use('/kakao', LoginRouter);
module.exports = router;
