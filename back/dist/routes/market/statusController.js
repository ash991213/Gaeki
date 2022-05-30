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
exports.status_Show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    try {
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
        console.log(e);
        const result = null;
        res.json(result);
    }
});
exports.hp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { user_idx, gold }, status: { hp }, } = req.body;
    try {
        yield Status.update({ hp: hp + 1 }, { where: { user_idx } });
        yield User.update({ gold: gold - hp * 100 }, { where: { id: user_idx } });
        const type = yield Status.findOne({
            where: { user_idx },
        });
        const user = yield User.findOne({
            where: { id: user_idx },
        });
        const result = {
            hp: type.hp,
            gold: user.gold,
        };
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
});
exports.luck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { user_idx, gold }, status: { luck }, } = req.body;
    try {
        yield Status.update({ luck: luck + 1 }, { where: { user_idx } });
        yield User.update({ gold: gold - luck * 100 }, { where: { id: user_idx } });
        const type = yield Status.findOne({
            where: { user_idx },
        });
        const user = yield User.findOne({
            where: { id: user_idx },
        });
        console.log(type.luck);
        const result = {
            luck: type.luck,
            gold: user.gold,
        };
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
});
exports.patience = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { user_idx, gold }, status: { patience }, } = req.body;
    try {
        yield Status.update({ patience: patience + 1 }, { where: { user_idx } });
        yield User.update({ gold: gold - patience * 100 }, { where: { id: user_idx } });
        const type = yield Status.findOne({
            where: { user_idx },
        });
        const user = yield User.findOne({
            where: { id: user_idx },
        });
        const result = {
            patience: type.patience,
            gold: user.gold,
        };
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
});
exports.coding = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { user_idx, gold }, status: { coding }, } = req.body;
    try {
        yield Status.update({ coding: coding - 1000 }, { where: { user_idx } });
        yield User.update({ gold: gold - coding * 100 }, { where: { id: user_idx } });
        const type = yield Status.findOne({
            where: { user_idx },
        });
        const user = yield User.findOne({
            where: { id: user_idx },
        });
        const result = {
            coding: type.coding,
            gold: user.gold,
        };
        res.json(result);
    }
    catch (e) {
        console.log(e);
        const result = null;
        res.json(result);
    }
});
