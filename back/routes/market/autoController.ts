var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.auto_Show = async (req: any, res: any) => {
	const { user_idx } = req.body;

	const auto = await Auto_Gold.findOne({ where: { user_idx } });
	const { pc, desk, chair, cheer, cook, homekeeper, vehicle } = auto;
	const result = { pc, desk, chair, cheer, cook, homekeeper, vehicle };
	res.json(result);
};
