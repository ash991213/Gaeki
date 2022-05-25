var express = require('express');
var router = express.Router();
const SettingRouter = require('./setting/settingRouter');
const RankingRouter = require('./ranking/rankingRouter');
const gameRouter = require('./game/gameRouter');
const marketRouter = require('./market/marketRouter');

router.use('/setting', SettingRouter);
router.use('/ranking', RankingRouter);
router.use('/game', gameRouter);
router.use('/market', marketRouter);

module.exports = router;
