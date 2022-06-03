var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.click = async (req: any, res: any) => {
	const { user_idx, gold, typing, luck, gauge } = req.body;

	const random = Math.random() * 1000;

	if (random < luck) {
		console.log('스테이지 1 , 2 골드 2');
		if (gauge < 50) {
			await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2 }, { where: { id: user_idx } });
		} else {
			await User.update({ gold: gold + typing + typing }, { where: { id: user_idx } });
		}
	} else {
		console.log('스테이지 1 , 2');
		if (gauge < 50) {
			await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) }, { where: { id: user_idx } });
		} else {
			await User.update({ gold: gold + typing }, { where: { id: user_idx } });
		}
	}
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

exports.gold_exp = async (req: any, res: any) => {
	const { user_idx, gold, exp, stage, gauge } = req.body.user;
	const { typing, luck, patience } = req.body.user.status;
	const { random } = req.body;

	if (random < luck) {
		if (gauge < 50) {
			console.log('게이지 50미만');
			if (stage === 1) {
				console.log('1 스테이지 유저 골드 2');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 2) {
				console.log('2 스테이지 유저 골드 2');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 3) {
				console.log('3 스테이지 유저 골드 2');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 4) {
				console.log('4 스테이지 유저 골드 2');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 5) {
				console.log('5 스테이지 유저 골드 2');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 6) {
				console.log('6 스테이지 유저 골드 2');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2 }, { where: { id: user_idx } });
			}
		} else {
			console.log('게이지 50이상');
			if (stage === 1) {
				console.log('1 스테이지 유저 골드 2');
				await User.update({ gold: gold + typing + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 2) {
				console.log('2 스테이지 유저 골드 2');
				await User.update({ gold: gold + typing + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 3) {
				console.log('3 스테이지 유저 골드 2');
				await User.update({ gold: gold + typing + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 4) {
				console.log('4 스테이지 유저 골드 2');
				await User.update({ gold: gold + typing + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 5) {
				console.log('5 스테이지 유저 골드 2');
				await User.update({ gold: gold + typing + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 6) {
				console.log('6 스테이지 유저 골드 2');
				await User.update({ gold: gold + typing + typing }, { where: { id: user_idx } });
			}
		}
	} else {
		if (gauge < 50) {
			console.log('게이지 50미만');
			if (stage === 1) {
				console.log('1 스테이지 유저');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)), exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 2) {
				console.log('2 스테이지 유저');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)), exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 3) {
				console.log('3 스테이지 유저');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)), exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 4) {
				console.log('4 스테이지 유저');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)), exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 5) {
				console.log('5 스테이지 유저');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)), exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 5) {
				console.log('6 스테이지 유저');
				await User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) }, { where: { id: user_idx } });
			}
		} else {
			console.log('게이지 50이상');
			if (stage === 1) {
				console.log('1 스테이지 유저');
				await User.update({ gold: gold + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 3) {
				console.log('2 스테이지 유저');
				await User.update({ gold: gold + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 3) {
				console.log('3 스테이지 유저');
				await User.update({ gold: gold + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 4) {
				console.log('4 스테이지 유저');
				await User.update({ gold: gold + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 5) {
				console.log('5 스테이지 유저');
				await User.update({ gold: gold + typing, exp: exp + patience }, { where: { id: user_idx } });
			} else if (stage === 6) {
				console.log('6 스테이지 유저');
				await User.update({ gold: gold + typing }, { where: { id: user_idx } });
			}
		}
	}

	if (stage === 1) {
		if (100000 <= exp) {
			console.log('1 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}
	if (stage === 2) {
		if (125000 <= exp) {
			console.log('2 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}
	if (stage === 3) {
		if (150000 <= exp) {
			console.log('3 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}
	if (stage === 4) {
		if (175000 <= exp) {
			console.log('4 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}
	if (stage === 5) {
		if (100000 <= exp) {
			console.log('5 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}

	const a = await User.findOne({ where: { id: user_idx } });

	res.json({ gold: a.gold, exp: a.exp, stage: a.stage });
};

exports.hpDown = async (req: any, res: any) => {
	const { user_idx, gauge } = req.body;
	try {
		if (gauge > 0) {
			await User.update({ gauge: gauge - 1 }, { where: { id: user_idx } });

			const user = await User.findOne({
				where: { id: user_idx },
			});

			const result = {
				gauge: user.gauge,
			};

			res.json(result);
		}
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};

exports.bug = async (req: any, res: any) => {
	const { user_idx, gold } = req.body;
	const { hp, typing, luck } = req.body.status;
	const { chair, cheer, cook, desk, homekeeper, pc, vehicle } = req.body.auto;
	console.log(typing + desk * 10 + chair * 50 + pc * 250 + cook * 1250 + homekeeper * 6250 + cheer * 31250 + vehicle * 156250 * 10);
	try {
		const random = Math.random() * 1000;
		if (random < luck) {
			await User.update(
				{ gauge: 100 + hp, gold: gold + typing + desk * 10 + chair * 50 + pc * 250 + cook * 1250 + homekeeper * 6250 + cheer * 31250 + vehicle * 156250 * 10 },
				{ where: { id: user_idx } }
			);
		} else {
			await User.update(
				{ gauge: 100 + hp, gold: gold + typing + desk * 10 + chair * 50 + pc * 250 + cook * 1250 + homekeeper * 6250 + cheer * 31250 + vehicle * 156250 * 5 },
				{ where: { id: user_idx } }
			);
		}

		const user = await User.findOne({
			where: { id: user_idx },
		});

		const result = {
			gold: user.gold,
			gauge: user.gauge,
		};

		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
};
