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
    const kakaoAuthorize = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoData.client_id}&redirect_uri=${kakaoData.redirect_uri}&response_type=code`;
    res.redirect(kakaoAuthorize);
});
exports.redirectLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const response = yield axios.post(uri, body, header);
        const token = response.data.access_token;
        const user = yield axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${token}`,
            },
        });
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
        console.log(error);
    }
});
