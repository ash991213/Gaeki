var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;
var kakaoData: kakaoType = require('../../kakao');
const axios = require('axios');
const qs = require('qs');

interface kakaoType {
	client_id: string;
	client_secret: string;
	redirect_uri: string;
}

exports.login = async (req: any, res: any) => {
	const kakaoAuthorize = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoData.client_id}&redirect_uri=${kakaoData.redirect_uri}&response_type=code`;
	res.redirect(kakaoAuthorize);
};

exports.redirectLogin = async (req: any, res: any) => {
	try {
		const uri = 'https://kauth.kakao.com/oauth/token';
		const body = qs.stringify({
			grant_type: 'authorization_code',
			client_id: kakaoData.client_id,
			client_secret: kakaoData.client_secret,
			redirect_uri: kakaoData.redirect_uri,
			code: req.query.code,
		});
		const header = { 'Content-Type': 'application/x-www-form-urlencoded' };

		const response = await axios.post(uri, body, header);

		const token = response.data.access_token;

		const user = await axios.get('https://kapi.kakao.com/v2/user/me', {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Bearer ${token}`,
			},
		});

		const { nickname, thumbnail_image } = user.data.properties;
		const { email } = user.data.kakao_account;
		let id;
		const Info = await User.findOne({
			where: {
				userid: `${email}`,
			},
		});

		if (Info === null) {
			const join = await User.create({
				userid: email,
				nickname: nickname,
				image: thumbnail_image,
			});
			await Status.create({
				user_idx: join.id,
			});
			await Auto_Gold.create({
				user_idx: join.id,
			});
			await Auto_Exp.create({
				user_idx: join.id,
			});
			id = join.id;
			console.log('신규 유저 아이디', id);
		} else {
			id = Info.id;
			console.log('기존 유저 아이디', id);
		}

		res.redirect(`http://15.164.141.28/game?id=${id}`);
	} catch (error) {
		console.log(error);
	}
};
