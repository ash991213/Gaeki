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
exports.exp_Dog = (req, res) => {
    console.log(req.body.a);
};
exports.exp_Cat = (req, res) => {
    console.log(req.body.b);
};
exports.exp_Fish = (req, res) => {
    console.log(req.body.c);
};
exports.exp_Bird = (req, res) => {
    console.log(req.body.d);
};
