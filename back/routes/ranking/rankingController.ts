var models = require('../../models');
var { User } = models;

exports.list = async (req: any, res: any) => {
	let { num } = req.body;
	try {
		if (num === undefined) {
			num = 1;
		}
		const list = await User.findAll({
			attributes: ['nickname', 'gold'],
			order: [['gold', 'DESC']],
			limit: 10,
			where: {
				stage: num,
			},
		});
		const result = {
			list,
		};
		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};

exports.myrank = async (req: any, res: any) => {
	const { user_idx, stage } = req.body;
	try {
		const user = await User.findAll({
			order: [['gold', 'DESC']],
			where: {
				stage,
			},
		});

		let rank;

		for (let i = 0; i < user.length; i++) {
			if (user[i].id === user_idx) {
				rank = i + 1;
			}
		}

		const myrank = await User.findOne({
			where: {
				id: user_idx,
			},
		});

		const result = {
			myrank,
			rank,
		};

		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};
