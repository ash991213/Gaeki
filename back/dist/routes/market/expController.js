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
    // select * from Auto_Exp where user_idx=useridx
    const result = { dog, cat, fish, bird };
    res.json(result);
});
exports.exp_Dog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold } = req.body;
    const { dog } = req.body.auto_exp;
    yield Auto_Exp.update({ dog: dog + 1 }, { where: { user_idx } });
    yield User.update({ gold: gold - (dog + 1) * 1000 }, { where: { id: user_idx } });
    const Dog = yield Auto_Exp.findOne({ where: user_idx });
    const DogGold = yield User.findOne({ where: { id: user_idx } });
    const result = {
        dog: Dog.dog,
        gold: DogGold.gold
    };
    res.json(result);
});
exports.exp_Cat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold } = req.body;
    const { cat } = req.body.auto_exp;
    yield Auto_Exp.update({ cat: cat + 1 }, { where: { user_idx } });
    yield User.update({ gold: gold - (cat + 1) * 10000 }, { where: { id: user_idx } });
    const CAT = yield Auto_Exp.findOne({ where: user_idx });
    const CatGold = yield User.findOne({ where: { id: user_idx } });
    const result = {
        cat: CAT.cat,
        gold: CatGold.gold
    };
    res.json(result);
});
exports.exp_Fish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold } = req.body;
    const { fish } = req.body.auto_exp;
    yield Auto_Exp.update({ fish: fish + 1 }, { where: { user_idx } });
    yield User.update({ gold: gold - (fish + 1) * 50000 }, { where: { id: user_idx } });
    const FISH = yield Auto_Exp.findOne({ where: user_idx });
    const FishGold = yield User.findOne({ where: { id: user_idx } });
    const result = {
        fish: FISH.fish,
        gold: FishGold.gold
    };
    res.json(result);
});
exports.exp_Bird = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx, gold } = req.body;
    const { bird } = req.body.auto_exp;
    yield Auto_Exp.update({ bird: bird + 1 }, { where: { user_idx } });
    yield User.update({ gold: gold - (bird + 1) * 100000 }, { where: { id: user_idx } });
    const BIRD = yield Auto_Exp.findOne({ where: user_idx });
    const BirdGold = yield User.findOne({ where: { id: user_idx } });
    const result = {
        bird: BIRD.bird,
        gold: BirdGold.gold
    };
    res.json(result);
});
exports.guage_Exp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { exp, user_idx } = req.body;
    const { dog, cat, fish, bird } = req.body.auto_exp;
    yield User.update({ exp: exp + (dog * 100) + (cat * 1000) + (fish * 5000) + (bird * 10000) }, { where: { id: user_idx } });
    const GuageExp = yield User.findOne({ where: { id: user_idx } });
    res.json(GuageExp.exp);
});
