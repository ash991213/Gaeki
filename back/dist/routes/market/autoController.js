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
exports.auto_Show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx } = req.body;
    const auto = yield Auto_Gold.findOne({ where: { user_idx } });
    const { pc, desk, chair, cheer, cook, homekeeper, vehicle } = auto;
    const result = { pc, desk, chair, cheer, cook, homekeeper, vehicle };
    res.json(result);
});
exports.auto_Desk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_idx } = req.body.user;
    const { desk } = req.body.auto;
    yield Auto_Gold.update({ desk: desk + 1 }, { where: { user_idx } });
    const Desk = yield Auto_Gold.findOne({ where: user_idx });
    const result = { desk: Desk.desk };
    res.json(result);
});
