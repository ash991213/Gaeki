var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.show = async (req: any, res: any) => {
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

	console.log(req.body);

	try {
		console.log(gold);
		console.log(typing);
		console.log(gold <= typing * 100);
		if (gold < typing * 100) throw new Error('골드가 부족합니다.');
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
	} catch (e: any) {
		let response = {
			errno: 1,
		};
		if (e.message === '골드가 부족합니다.') {
			response.errno = 0;
		}
		res.json(response);
	}
};
