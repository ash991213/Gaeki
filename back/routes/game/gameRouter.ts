var express = require('express');
var router = express.Router();

var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

router.post('/', async (req: any, res: any) => {
	const [info] = await User.findAll({
		attributes: ['userid', 'nickname', 'stage', 'gold', 'exp'],
		where: {
			userid: 'test3',
		},
	});

	const { userid, nickname, stage, gold, exp } = info;
	const result = {
		userid,
		nickname,
		stage,
		gold,
		exp,
	};

	res.json(result);
});

module.exports = router;
