var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.click = async (req: any, res: any) => {
	const { user_idx, gold, typing } = req.body;

	await User.update({ gold: gold + typing }, { where: { id: user_idx } });

	const a = await User.findOne({ where: { id: user_idx } });

	res.json({ gold: a.dataValues.gold });
};

exports.user = async (req: any, res: any) => {
	const { user_idx } = req.body;
	try {
		const user = await User.findOne({
			where: {
				id: user_idx,
			},
		});

		const { id, nickname, image, stage, gauge, gold, exp, background_sound, sound_effect } = user;

		const result = {
			id,
			nickname,
			image,
			stage,
			gauge,
			gold,
			exp,
			background_sound,
			sound_effect,
		};

		res.json(result);
	} catch (error) {
		console.log(error);
		const result = null;
		res.json(result);
	}
};
