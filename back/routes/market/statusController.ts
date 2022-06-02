var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.status_Show = async (req: any, res: any) => {
	const { user_idx } = req.body;

	try {
		const status = await Status.findOne({
			where: { user_idx },
		});

		const result = status.dataValues;

		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};

exports.typing = async (req: any, res: any) => {
	const {
		user: { user_idx, gold },
		status: { typing },
	} = req.body;

	try {
		await Status.update({ typing: typing + 1 }, { where: { user_idx } });
		await User.update({ gold: gold - typing * 100 }, { where: { id: user_idx } });

		const type = await Status.findOne({
			where: { user_idx },
		});

		const user = await User.findOne({
			where: { id: user_idx },
		});

		const result = {
			typing: type.typing,
			gold: user.gold,
		};

		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};

exports.hp = async (req: any, res: any) => {
	const {
		user: { user_idx, gold },
		status: { hp },
	} = req.body;

	try {
		await Status.update({ hp: hp + 1 }, { where: { user_idx } });
		await User.update({ gold: gold - hp * 100 }, { where: { id: user_idx } });

		const type = await Status.findOne({
			where: { user_idx },
		});
		const user = await User.findOne({
			where: { id: user_idx },
		});

		const result = {
			hp: type.hp,
			gold: user.gold,
		};

		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};

exports.luck = async (req: any, res: any) => {
	const {
		user: { user_idx, gold },
		status: { luck },
	} = req.body;

	try {
		await Status.update({ luck: luck + 1 }, { where: { user_idx } });
		await User.update({ gold: gold - luck * 100 }, { where: { id: user_idx } });

		const type = await Status.findOne({
			where: { user_idx },
		});
		const user = await User.findOne({
			where: { id: user_idx },
		});

		console.log(type.luck);

		const result = {
			luck: type.luck,
			gold: user.gold,
		};

		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};

exports.patience = async (req: any, res: any) => {
	const {
		user: { user_idx, gold },
		status: { patience },
	} = req.body;

	try {
		await Status.update({ patience: patience + 1 }, { where: { user_idx } });
		await User.update({ gold: gold - patience * 100 }, { where: { id: user_idx } });

		const type = await Status.findOne({
			where: { user_idx },
		});
		const user = await User.findOne({
			where: { id: user_idx },
		});

		const result = {
			patience: type.patience,
			gold: user.gold,
		};

		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};

exports.coding = async (req: any, res: any) => {
	const {
		user: { user_idx, gold },
		status: { coding },
	} = req.body;

	try {
		await Status.update({ coding: coding - 1000 }, { where: { user_idx } });
		await User.update({ gold: gold - (121000 - coding) * 2.5 }, { where: { id: user_idx } });

		const type = await Status.findOne({
			where: { user_idx },
		});
		const user = await User.findOne({
			where: { id: user_idx },
		});

		const result = {
			coding: type.coding,
			gold: user.gold,
		};
		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};
