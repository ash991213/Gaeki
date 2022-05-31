var models = require('../../models');
var { User , Auto_Gold , Auto_Exp, Status } = models;


exports.exp_Show = (req:any,res:any) => {
    console.log(req.body)
    res.json({a:37})
}

exports.exp_Dog = (req:any,res:any) => {
    console.log("backdog")
}

exports.exp_Cat = (req:any,res:any) => {
    console.log("backCat")
}

exports.exp_Fish = (req:any,res:any) => {
    console.log("backFish")
}

exports.exp_Bird = (req:any,res:any) => {
    console.log("backBird")
}