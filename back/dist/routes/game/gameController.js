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
    const { user_idx, gold, typing, luck, gauge } = req.body;
    const random = Math.random() * 1000;
    if (random < luck) {
        console.log('스테이지 1 , 2 골드 2');
        if (gauge < 50) {
            yield User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2 }, { where: { id: user_idx } });
        }
        else {
            yield User.update({ gold: gold + typing + typing }, { where: { id: user_idx } });
        }
    }
    else {
        console.log('스테이지 1 , 2');
        if (gauge < 50) {
            yield User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) }, { where: { id: user_idx } });
        }
        else {
            yield User.update({ gold: gold + typing }, { where: { id: user_idx } });
        }
    }
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
exports.gold_exp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold, exp, stage, gauge } = req.body.user;
    const { typing, luck, patience } = req.body.user.status;
    const random = Math.random() * 1000;
    if (random < luck) {
        if (gauge < 50) {
            console.log('게이지 50미만');
            if (stage === 3) {
                console.log('3 스테이지 유저 골드 2');
                yield User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2, exp: exp + patience / 10 }, { where: { id: user_idx } });
            }
            else if (stage === 4) {
                console.log('4 스테이지 유저 골드 2');
                yield User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2, exp: exp + patience / 50 }, { where: { id: user_idx } });
            }
            else if (stage === 5) {
                console.log('5 스테이지 유저 골드 2');
                yield User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)) * 2, exp: exp + patience / 100 }, { where: { id: user_idx } });
            }
        }
        else {
            console.log('게이지 50이상');
            if (stage === 3) {
                console.log('3 스테이지 유저 골드 2');
                yield User.update({ gold: gold + typing + typing, exp: exp + patience / 10 }, { where: { id: user_idx } });
            }
            else if (stage === 4) {
                console.log('4 스테이지 유저 골드 2');
                yield User.update({ gold: gold + typing + typing, exp: exp + patience / 50 }, { where: { id: user_idx } });
            }
            else if (stage === 5) {
                console.log('5 스테이지 유저 골드 2');
                yield User.update({ gold: gold + typing + typing, exp: exp + patience / 100 }, { where: { id: user_idx } });
            }
        }
    }
    else {
        if (gauge < 50) {
            console.log('게이지 50미만');
            if (stage === 3) {
                console.log('3 스테이지 유저');
                yield User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)), exp: exp + patience / 10 }, { where: { id: user_idx } });
            }
            else if (stage === 4) {
                console.log('4 스테이지 유저');
                yield User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)), exp: exp + patience / 50 }, { where: { id: user_idx } });
            }
            else if (stage === 5) {
                console.log('5 스테이지 유저');
                yield User.update({ gold: gold + parseInt(((typing / 100) * 70).toFixed(0)), exp: exp + patience / 100 }, { where: { id: user_idx } });
            }
        }
        else {
            console.log('게이지 50이상');
            if (stage === 3) {
                console.log('3 스테이지 유저');
                yield User.update({ gold: gold + typing, exp: exp + patience / 10 }, { where: { id: user_idx } });
            }
            else if (stage === 4) {
                console.log('4 스테이지 유저');
                yield User.update({ gold: gold + typing, exp: exp + patience / 50 }, { where: { id: user_idx } });
            }
            else if (stage === 5) {
                console.log('5 스테이지 유저');
                yield User.update({ gold: gold + typing, exp: exp + patience / 100 }, { where: { id: user_idx } });
            }
        }
    }
    if (100000 <= exp) {
        console.log('유저 레벨업!');
        yield User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
    }
    const a = yield User.findOne({ where: { id: user_idx } });
    res.json({ gold: a.gold, exp: a.exp, stage: a.stage });
});
exports.hpDown = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gauge } = req.body;
    try {
        if (gauge > 0) {
            yield User.update({ gauge: gauge - 1 }, { where: { id: user_idx } });
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
exports.bug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold } = req.body;
    const { hp, typing } = req.body.status;
    try {
        yield User.update({ gauge: 100 + hp, gold: gold + typing * 5 }, { where: { id: user_idx } });
        const user = yield User.findOne({
            where: { id: user_idx },
        });
        const result = {
            gold: user.gold,
            gauge: user.gauge,
        };
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
});
