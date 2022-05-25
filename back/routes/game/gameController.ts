var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.info = async (req: any, res: any) => {
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
};

exports.click = async (req: any, res: any) => {
	const { userid, gold } = req.body;

	res.json({ a: '1' });
};
