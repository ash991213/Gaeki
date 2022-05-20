const express = require('express');
const app = express();
const { sequelize } = require('./models');
const cors = require('cors');
const models = require('./models');

app.use(
	cors({
		origin: '*',
		credentials: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize
	.sync({ force: false }) // Model에서 정의한 이름을 갖는 테이블이 없을때 동작하며 DB에 테이블이 없으면 생성
	.then(() => {
		console.log('Connect');
	})
	.catch((e: any) => {
		console.log(e);
		console.log('Disconect');
	});

app.get('/', (req: any, res: any) => {
	res.send('hello');
});

interface reqType {
	body: any;
}

const { Counte } = models;

app.post('/count/plus', async (req: any, res: any) => {
	const { action } = req.body;
	try {
		await Counte.update(
			{
				num: action + 1,
			},
			{
				where: { id: 1 },
			}
		);
		const number = await Counte.findOne({
			attributes: ['num'],
			where: {
				id: 1,
			},
		});
		const result = number.num;
		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
});

app.post('/count/minus', async (req: any, res: any) => {
	const { action } = req.body;
	try {
		await Counte.update(
			{
				num: action - 1,
			},
			{
				where: { id: 1 },
			}
		);
		const number = await Counte.findOne({
			attributes: ['num'],
			where: {
				id: 1,
			},
		});
		const result = number.num;
		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
});

app.post('/count/list', async (req: any, res: any) => {
	try {
		const number = await Counte.findOne({
			attributes: ['num'],
			where: {
				id: 1,
			},
		});
		const result = number.num;
		res.json(result);
	} catch (e) {
		console.log(e);
		const result = null;
		res.json(result);
	}
});

const { User } = models;

app.post('/rank/list', async (req: any, res: any) => {
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
});

app.listen(4000, () => {
	console.log('Server ON');
});

export {};
