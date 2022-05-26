"use strict";
var models = require('../../models');
var { User } = models;
exports.effect = (req, res) => {
    const { user_idx, sound_effect } = req.body;
    User.update({
        sound_effect: !sound_effect,
    }, {
        where: { id: user_idx },
    }),
        res.json({ type: 'SUCCESS' });
};
exports.back = (req, res) => {
    const { user_idx, background_sound } = req.body;
    User.update({
        background_sound: !background_sound,
    }, {
        where: { id: user_idx },
    }),
        res.json({ type: 'SUCCESS' });
};
