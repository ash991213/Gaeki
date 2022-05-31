"use strict";
var models = require('../../models');
var { User, Auto_Gold, Auto_Exp, Status } = models;
exports.exp_Show = (req, res) => {
    console.log(req.body);
    res.json({ a: 37 });
};
exports.exp_Dog = (req, res) => {
    console.log("backdog");
};
exports.exp_Cat = (req, res) => {
    console.log("backCat");
};
exports.exp_Fish = (req, res) => {
    console.log("backFish");
};
exports.exp_Bird = (req, res) => {
    console.log("backBird");
};
