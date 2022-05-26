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
exports.show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx } = req.body;
    try {
        const status = yield Status.findOne({
            where: { user_idx },
        });
        const result = status.dataValues;
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
});
exports.typing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { user_idx, gold }, status: { typing }, } = req.body;
    console.log(req.body);
    try {
        console.log(gold);
        console.log(typing);
        console.log(gold <= typing * 100);
        if (gold < typing * 100)
            throw new Error('골드가 부족합니다.');
        yield Status.update({ typing: typing + 1 }, { where: { user_idx } });
        yield User.update({ gold: gold - typing * 100 }, { where: { id: user_idx } });
        const type = yield Status.findOne({
            where: { user_idx },
        });
        const user = yield User.findOne({
            where: { id: user_idx },
        });
        const result = {
            typing: type.typing,
            gold: user.gold,
        };
        res.json(result);
    }
    catch (e) {
        let response = {
            errno: 1,
        };
        if (e.message === '골드가 부족합니다.') {
            response.errno = 0;
        }
        res.json(response);
    }
});
