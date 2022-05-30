var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.auto_Gold = async (req: any, res: any) => {
	const { user_idx, gold, auto } = req.body.user;
	const { chair, cheer, cook, desk, homekeeper, pc, vehicle } = auto;

	// setInterval(async () => {
	await User.update({ gold: gold + 1 }, { where: { id: user_idx } });
	// }, 1000);

	const now = await User.findOne({ where: { id: user_idx } });
	const currentGold = now.gold;

	res.json({ gold: currentGold });
};

exports.auto_Show = async (req: any, res: any) => {
	const { user_idx } = req.body;

	const auto = await Auto_Gold.findOne({ where: { user_idx } });
	const { pc, desk, chair, cheer, cook, homekeeper, vehicle } = auto;
	const result = { pc, desk, chair, cheer, cook, homekeeper, vehicle };
	res.json(result);
};

exports.auto_Desk = async (req: any, res: any) => {
	const { user_idx, gold } = req.body.user;
	const { desk } = req.body.auto;

	await Auto_Gold.update({ desk: desk + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - desk * 300 }, { where: { id: user_idx } });

	const Desk = await Auto_Gold.findOne({ where: user_idx });

	const currentGold = await User.findOne({ where: { id: user_idx } });

	const result = { desk: Desk.desk, gold: currentGold.gold };
	res.json(result);
};
