var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.auto_Show = async (req: any, res: any) => {
	const { user_idx } = req.body;

	const auto = await Auto_Gold.findOne({ where: { user_idx } });
	const { pc, desk, chair, cheer, cook, homekeeper, vehicle } = auto;
	const result = { pc, desk, chair, cheer, cook, homekeeper, vehicle };
	res.json(result);
};

exports.auto_Gold = async (req: any, res: any) => {
	const { user_idx, gold, auto } = req.body.user;
	const { chair, cheer, cook, desk, homekeeper, pc, vehicle } = auto;

	await User.update(
		{
			gold: gold + desk * 10 + chair * 50 + pc * 250 + cook * 1250 + homekeeper * 6250 + cheer * 31250 + vehicle * 156250,
		},
		{ where: { id: user_idx } }
	);

	const now = await User.findOne({ where: { id: user_idx } });
	const currentGold = now.gold;

	res.json({ gold: currentGold });
};

exports.auto_Desk = async (req: any, res: any) => {
	const { user_idx, gold } = req.body.user;
	const { desk } = req.body.auto;

	await Auto_Gold.update({ desk: desk + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (desk + 1) * 300 }, { where: { id: user_idx } });

	const Desk = await Auto_Gold.findOne({ where: user_idx });

	const currentGold = await User.findOne({ where: { id: user_idx } });

	const result = { desk: Desk.desk, gold: currentGold.gold };
	res.json(result);
};
exports.auto_Chair = async (req: any, res: any) => {
	const { user_idx, gold } = req.body.user;
	const { chair } = req.body.auto;

	await Auto_Gold.update({ chair: chair + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (chair + 1) * 1500 }, { where: { id: user_idx } });

	const Chair = await Auto_Gold.findOne({ where: user_idx });

	const currentGold = await User.findOne({ where: { id: user_idx } });

	const result = { chair: Chair.chair, gold: currentGold.gold };

	res.json(result);
};
exports.auto_Pc = async (req: any, res: any) => {
	const { user_idx, gold } = req.body.user;
	const { pc } = req.body.auto;

	await Auto_Gold.update({ pc: pc + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (pc + 1) * 7500 }, { where: { id: user_idx } });

	const Pc = await Auto_Gold.findOne({ where: user_idx });

	const currentGold = await User.findOne({ where: { id: user_idx } });

	const result = { pc: Pc.pc, gold: currentGold.gold };

	res.json(result);
};
exports.auto_Cook = async (req: any, res: any) => {
	const { user_idx, gold } = req.body.user;
	const { cook } = req.body.auto;

	await Auto_Gold.update({ cook: cook + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (cook + 1) * 37500 }, { where: { id: user_idx } });

	const Cook = await Auto_Gold.findOne({ where: user_idx });

	const currentGold = await User.findOne({ where: { id: user_idx } });

	const result = { cook: Cook.cook, gold: currentGold.gold };

	res.json(result);
};
exports.auto_Homekeeper = async (req: any, res: any) => {
	const { user_idx, gold } = req.body.user;
	const { homekeeper } = req.body.auto;
	await Auto_Gold.update({ homekeeper: homekeeper + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (homekeeper + 1) * 187500 }, { where: { id: user_idx } });

	const Homekeeper = await Auto_Gold.findOne({ where: user_idx });
	const currentGold = await User.findOne({ where: { id: user_idx } });
	const result = { homekeeper: Homekeeper.homekeeper, gold: currentGold.gold };
	res.json(result);
};

exports.auto_Cheer = async (req: any, res: any) => {
	const { user_idx, gold } = req.body.user;
	const { cheer } = req.body.auto;

	await Auto_Gold.update({ cheer: cheer + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (cheer + 1) * 937500 }, { where: { id: user_idx } });

	const Cheer = await Auto_Gold.findOne({ where: user_idx });
	const currentGold = await User.findOne({ where: { id: user_idx } });
	const result = { cheer: Cheer.cheer, gold: currentGold.gold };
	res.json(result);
};

exports.auto_Vehicle = async (req: any, res: any) => {
	const { user_idx, gold } = req.body.user;
	const { vehicle } = req.body.auto;
	await Auto_Gold.update({ vehicle: vehicle + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (vehicle + 1) * 4687500 }, { where: { id: user_idx } });

	const Vehicle = await Auto_Gold.findOne({ where: user_idx });
	const currentGold = await User.findOne({ where: { id: user_idx } });
	const result = { vehicle: Vehicle.vehicle, gold: currentGold.gold };
	res.json(result);
};
