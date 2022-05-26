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
