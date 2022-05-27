var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.auto_Show = async (req: any, res: any) => {
	const { user_idx } = req.body;

	const auto = await Auto_Gold.findOne({ where: { user_idx } });
	const { pc, desk, chair, cheer, cook, homekeeper, vehicle } = auto;
	const result = { pc, desk, chair, cheer, cook, homekeeper, vehicle };
	res.json(result);
};

exports.auto_Desk = async (req: any, res: any) => {
	const { user_idx } = req.body.user;
	const { desk } = req.body.auto;
	await Auto_Gold.update({ desk: desk + 1 }, { where: { user_idx } });

	const Desk = await Auto_Gold.findOne({ where: user_idx });

	const result = { desk: Desk.desk };
	res.json(result);
};