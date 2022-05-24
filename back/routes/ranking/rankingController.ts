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
