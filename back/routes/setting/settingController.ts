var models = require('../../models');
var { User } = models;

exports.effect = (req: any, res: any) => {
	const { userid, effectOn } = req.body;

	User.update(
		{
			background_sound: !effectOn,
		},
		{
			where: { userid: userid },
		}
	),
		res.json({ type: 'SUCCESS' });
};

exports.back = (req: any, res: any) => {
	const { userid, backOn } = req.body;

	User.update(
		{
			sound_effect: !backOn,
		},
		{
			where: { userid: userid },
		}
	),
		res.json({ type: 'SUCCESS' });
};
