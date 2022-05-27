"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;
var kakaoData = require('../../kakao');
const axios = require('axios');
const qs = require('qs');
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('인증 시도')
    const kakaoAuthorize = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoData.client_id}&redirect_uri=${kakaoData.redirect_uri}&response_type=code`;
    console.log('인증받았음?',kakaoAuthorize)
    res.redirect(kakaoAuthorize);
});
exports.redirectLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('리다이렉트 시도')
        const uri = 'https://kauth.kakao.com/oauth/token';
        const body = qs.stringify({
            grant_type: 'authorization_code',
            client_id: kakaoData.client_id,
            client_secret: kakaoData.client_secret,
            redirect_uri: kakaoData.redirect_uri,
            code: req.query.code,
        });
        const header = { 'Content-Type': 'application/x-www-form-urlencoded' };
        console.log('auth 인증확인시도')
        const response = yield axios.post(uri, body, header);
        console.log('auth 인증확인 결과',response)
        const token = response.data.access_token;
        console.log('로그인 시도')
        const user = yield axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('로그인 결과',user)
        const { nickname, thumbnail_image } = user.data.properties;
        const { email } = user.data.kakao_account;
        let id;
        const Info = yield User.findOne({
            where: {
                userid: `${email}`,
            },
        });
        if (Info === null) {
            const join = yield User.create({
                userid: email,
                nickname: nickname,
                image: thumbnail_image,
            });
            yield Status.create({
                user_idx: join.id,
            });
            yield Auto_Gold.create({
                user_idx: join.id,
            });
            yield Auto_Exp.create({
                user_idx: join.id,
            });
            id = join.id;
            console.log('신규 유저 아이디', id);
        }
        else {
            id = Info.id;
            console.log('기존 유저 아이디', id);
        }
        res.redirect(`http://localhost:3000/game?id=${id}`);
    }
    catch (error) {
        console.log('리다이렉트 실패',error);
    }
});
