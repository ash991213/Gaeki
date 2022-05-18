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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const { sequelize } = require('./models');
const cors = require('cors');
const models = require('./models');
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
app.listen(4000, () => {
    console.log('Server ON');
});
