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
exports.info = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [info] = yield User.findAll({
        attributes: ['userid', 'nickname', 'stage', 'gold', 'exp'],
        where: {
            userid: 'test3',
        },
    });
    const { userid, nickname, stage, gold, exp } = info;
    const result = {
        userid,
        nickname,
        stage,
        gold,
        exp,
    };
    res.json(result);
});
exports.click = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userid, gold } = req.body;
    res.json({ a: '1' });
});
