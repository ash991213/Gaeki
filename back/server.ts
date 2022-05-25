const express = require('express');
const app = express();
const { sequelize } = require('./models');
const cors = require('cors');
const router = require('./routes');

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

app.use(router);

app.listen(4000, () => {
	console.log('Server ON');
});

export {};
