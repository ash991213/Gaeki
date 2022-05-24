import axios from "axios";
const express = require('express');
const app = express();
const { sequelize } = require('./models');
const cors = require('cors');
const router = require('./routes');
import qs from 'qs';

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

/* google-api (백에서 테스트)*/
const CLIENT_ID = '558081775123-tplut889u1hm5mbq3ok0ffnfh8mto866.apps.googleusercontent.com';
const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
const Redirect_uri = 'http://localhost:3000';

const queryStr = qs.stringify({
	client_id: CLIENT_ID,
	redirect_uri: Redirect_uri,
	response_type: 'token',
	scope: 'https://www.googleapis.com/auth/games',
});

const loginUrl = AUTHORIZE_URI + '?' + queryStr;

app.get('/auth', (req: any, res: any) => {
	res.redirect(loginUrl);
});

app.get('/login', async (req: any, res: any) => {
	const URI =  'https://www.googleapis.com/games/v1/achievements'
	console.log("응??",req.body.body)
	const access_token = req.body.body
	try {
		const user = await axios.get(URI,{
			headers:{
				'Authorization':`Bearer ${access_token}`
			}
		})
		console.log('user:',user)
	} catch (e) {
		console.log('ㅇ우우우우우우')
		console.log(e)
	}

})

app.listen(4000, () => {
	console.log('Server ON');
});

export {};
