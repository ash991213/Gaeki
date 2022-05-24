"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express = require('express');
const app = express();
const { sequelize } = require('./models');
const cors = require('cors');
const router = require('./routes');
const qs_1 = __importDefault(require("qs"));
app.use(cors({
    origin: '*',
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
sequelize
    .sync({ force: false }) // Model에서 정의한 이름을 갖는 테이블이 없을때 동작하며 DB에 테이블이 없으면 생성
    .then(() => {
    console.log('Connect');
})
    .catch((e) => {
    console.log(e);
    console.log('Disconect');
});
app.use(router);
/* google-api */
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
app.get('/auth', (req, res) => {
    res.redirect(loginUrl);
});
app.get('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const URI = 'https://www.googleapis.com/games/v1/achievements';
    console.log("응??", req.body.body);
    const access_token = req.body.body;
    try {
        const user = yield axios_1.default.get(URI, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        console.log('user:', user);
    }
    catch (e) {
        console.log('ㅇ우우우우우우');
        console.log(e);
    }
}));
app.listen(4000, () => {
    console.log('Server ON');
});
