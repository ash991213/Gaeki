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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const { sequelize } = require('./models');
const cors = require('cors');
const models = require('./models');
const router = require('./api');
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
app.get('/', (req, res) => {
    res.send('hello');
});
const { Counte } = models;
app.post('/count/plus', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { action } = req.body;
    try {
        yield Counte.update({
            num: action + 1,
        }, {
            where: { id: 1 },
        });
        const number = yield Counte.findOne({
            attributes: ['num'],
            where: {
                id: 1,
            },
        });
        const result = number.num;
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
}));
app.post('/count/minus', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { action } = req.body;
    try {
        yield Counte.update({
            num: action - 1,
        }, {
            where: { id: 1 },
        });
        const number = yield Counte.findOne({
            attributes: ['num'],
            where: {
                id: 1,
            },
        });
        const result = number.num;
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
}));
app.post('/count/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const number = yield Counte.findOne({
            attributes: ['num'],
            where: {
                id: 1,
            },
        });
        const result = number.num;
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
}));
const { User } = models;
app.post('/rank/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { num } = req.body;
    try {
        if (num === undefined) {
            num = 1;
        }
        const list = yield User.findAll({
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
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
}));
/* google-api */
const CLIENT_ID = '558081775123-tplut889u1hm5mbq3ok0ffnfh8mto866.apps.googleusercontent.com';
const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
const Redirect_uri = 'http://localhost:4000';
const queryStr = qs_1.default.stringify({
    client_id: CLIENT_ID,
    redirect_uri: Redirect_uri,
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/games',
});
const loginUrl = AUTHORIZE_URI + '?' + queryStr;
app.get('/auth', (req, res) => {
    console.log('h1?');
    res.redirect(loginUrl);
});
app.listen(4000, () => {
    console.log('Server ON');
});
