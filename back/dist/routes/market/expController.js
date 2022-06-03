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
exports.exp_Show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx } = req.body;
    const { dog, cat, fish, bird } = yield Auto_Exp.findOne({ where: { user_idx } });
    const result = { dog, cat, fish, bird };
    res.json(result);
});
exports.exp_Dog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold } = req.body;
    const { dog } = req.body.auto_exp;
    yield Auto_Exp.update({ dog: dog + 1 }, { where: { user_idx } });
    yield User.update({ gold: gold - (dog + 1) * 5000 }, { where: { id: user_idx } });
    const Dog = yield Auto_Exp.findOne({ where: user_idx });
    const DogGold = yield User.findOne({ where: { id: user_idx } });
    const result = {
        dog: Dog.dog,
        gold: DogGold.gold,
    };
    res.json(result);
});
exports.exp_Cat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold } = req.body;
    const { cat } = req.body.auto_exp;
    yield Auto_Exp.update({ cat: cat + 1 }, { where: { user_idx } });
    yield User.update({ gold: gold - (cat + 1) * 9000 }, { where: { id: user_idx } });
    const CAT = yield Auto_Exp.findOne({ where: user_idx });
    const CatGold = yield User.findOne({ where: { id: user_idx } });
    const result = {
        cat: CAT.cat,
        gold: CatGold.gold,
    };
    res.json(result);
});
exports.exp_Fish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold } = req.body;
    const { fish } = req.body.auto_exp;
    yield Auto_Exp.update({ fish: fish + 1 }, { where: { user_idx } });
    yield User.update({ gold: gold - (fish + 1) * 16500 }, { where: { id: user_idx } });
    const FISH = yield Auto_Exp.findOne({ where: user_idx });
    const FishGold = yield User.findOne({ where: { id: user_idx } });
    const result = {
        fish: FISH.fish,
        gold: FishGold.gold,
    };
    res.json(result);
});
exports.exp_Bird = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold } = req.body;
    const { bird } = req.body.auto_exp;
    yield Auto_Exp.update({ bird: bird + 1 }, { where: { user_idx } });
    yield User.update({ gold: gold - (bird + 1) * 30000 }, { where: { id: user_idx } });
    const BIRD = yield Auto_Exp.findOne({ where: user_idx });
    const BirdGold = yield User.findOne({ where: { id: user_idx } });
    const result = {
        bird: BIRD.bird,
        gold: BirdGold.gold,
    };
    res.json(result);
});
exports.guage_Exp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { exp, user_idx, stage } = req.body;
    const { dog, cat, fish, bird } = req.body.auto_exp;
    console.log(exp, user_idx, stage);
    yield User.update({ exp: exp + dog * 10 + cat * 20 + fish * 40 + bird * 80 }, { where: { id: user_idx } });
    const user = yield User.findOne({ where: { id: user_idx } });
    if (stage === 1) {
        if (100000 <= user.exp) {
            console.log('1 스테이지 유저 레벨업!');
            yield User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
        }
    }
    if (stage === 2) {
        if (125000 <= user.exp) {
            console.log('2 스테이지 유저 레벨업!');
            yield User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
        }
    }
    if (stage === 3) {
        if (150000 <= user.exp) {
            console.log('3 스테이지 유저 레벨업!');
            yield User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
        }
    }
    if (stage === 4) {
        if (175000 <= user.exp) {
            console.log('4 스테이지 유저 레벨업!');
            yield User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
        }
    }
    if (stage === 5) {
        if (100000 <= user.exp) {
            console.log('5 스테이지 유저 레벨업!');
            yield User.update({ exp: 0, stage: stage + 1 }, { where: { id: user_idx } });
        }
    }
    const GuageExp = yield User.findOne({ where: { id: user_idx } });
    res.json({ exp: GuageExp.exp, stage: GuageExp.stage });
});
