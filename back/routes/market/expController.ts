var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;

exports.exp_Show = async (req: any, res: any) => {
	const { user_idx } = req.body;
	const { dog, cat, fish, bird } = await Auto_Exp.findOne({ where: { user_idx } });
	const result = { dog, cat, fish, bird };
	res.json(result);
};

exports.exp_Dog = async (req: any, res: any) => {
	const { user_idx, gold } = req.body;
	const { dog } = req.body.auto_exp;
	await Auto_Exp.update({ dog: dog + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (dog + 1) * 5000 }, { where: { id: user_idx } });

	const Dog = await Auto_Exp.findOne({ where: user_idx });
	const DogGold = await User.findOne({ where: { id: user_idx } });
	const result = {
		dog: Dog.dog,
		gold: DogGold.gold,
	};
	res.json(result);
};

exports.exp_Cat = async (req: any, res: any) => {
	const { user_idx, gold } = req.body;
	const { cat } = req.body.auto_exp;
	await Auto_Exp.update({ cat: cat + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (cat + 1) * 9000 }, { where: { id: user_idx } });

	const CAT = await Auto_Exp.findOne({ where: user_idx });
	const CatGold = await User.findOne({ where: { id: user_idx } });

	const result = {
		cat: CAT.cat,
		gold: CatGold.gold,
	};

	res.json(result);
};

exports.exp_Fish = async (req: any, res: any) => {
	const { user_idx, gold } = req.body;
	const { fish } = req.body.auto_exp;

	await Auto_Exp.update({ fish: fish + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (fish + 1) * 16500 }, { where: { id: user_idx } });

	const FISH = await Auto_Exp.findOne({ where: user_idx });
	const FishGold = await User.findOne({ where: { id: user_idx } });

	const result = {
		fish: FISH.fish,
		gold: FishGold.gold,
	};

	res.json(result);
};

exports.exp_Bird = async (req: any, res: any) => {
	const { user_idx, gold } = req.body;
	const { bird } = req.body.auto_exp;

	await Auto_Exp.update({ bird: bird + 1 }, { where: { user_idx } });

	await User.update({ gold: gold - (bird + 1) * 30000 }, { where: { id: user_idx } });

	const BIRD = await Auto_Exp.findOne({ where: user_idx });
	const BirdGold = await User.findOne({ where: { id: user_idx } });
	const result = {
		bird: BIRD.bird,
		gold: BirdGold.gold,
	};

	res.json(result);
};

exports.guage_Exp = async (req: any, res: any) => {
	const { exp, user_idx, stage } = req.body;
	const { dog, cat, fish, bird } = req.body.auto_exp;

	console.log(exp, user_idx, stage);

	await User.update({ exp: exp + dog * 10 + cat * 20 + fish * 40 + bird * 80 }, { where: { id: user_idx } });

	const user = await User.findOne({ where: { id: user_idx } });

	if (stage === 1) {
		if (100000 <= user.exp) {
			console.log('1 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}
	if (stage === 2) {
		if (125000 <= user.exp) {
			console.log('2 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}
	if (stage === 3) {
		if (150000 <= user.exp) {
			console.log('3 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}
	if (stage === 4) {
		if (175000 <= user.exp) {
			console.log('4 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}
	if (stage === 5) {
		if (100000 <= user.exp) {
			console.log('5 스테이지 유저 레벨업!');
			await User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
		}
	}

	const GuageExp = await User.findOne({ where: { id: user_idx } });

	res.json({ exp: GuageExp.exp, stage: GuageExp.stage });
};
