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
var { User } = models;
exports.list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.myrank = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, stage } = req.body;
    try {
        const user = yield User.findAll({
            order: [['gold', 'DESC']],
            where: {
                stage,
            },
        });
        let rank;
        for (let i = 0; i < user.length; i++) {
            if (user[i].id === user_idx) {
                rank = i + 1;
            }
        }
        const myrank = yield User.findOne({
            where: {
                id: user_idx,
            },
        });
        const result = {
            myrank,
            rank,
        };
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
});
