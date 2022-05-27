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
exports.click = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold, typing } = req.body;
    yield User.update({ gold: gold + typing }, { where: { id: user_idx } });
    const a = yield User.findOne({ where: { id: user_idx } });
    res.json({ gold: a.dataValues.gold });
});
exports.user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx } = req.body;
    try {
        const user = yield User.findOne({
            where: {
                id: user_idx,
            },
        });
        const { id, nickname, image, stage, gauge, gold, exp, background_sound, sound_effect } = user;
        const result = {
            id,
            nickname,
            image,
            stage,
            gauge,
            gold,
            exp,
            background_sound,
            sound_effect,
        };
        res.json(result);
    }
    catch (error) {
        console.log(error);
        const result = null;
        res.json(result);
    }
});
exports.hpDown = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gauge } = req.body;
    try {
        if (gauge > 0) {
            yield User.update({ gauge: gauge - 2 }, { where: { id: user_idx } });
            const user = yield User.findOne({
                where: { id: user_idx },
            });
            const result = {
                gauge: user.gauge,
            };
            res.json(result);
        }
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
});
