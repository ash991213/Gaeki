var models = require('../../models');
var { User , Auto_Gold , Auto_Exp, Status } = models;


exports.exp_Show = async(req:any,res:any) => {
    const { user_idx } = req.body;
    const {dog,cat,fish,bird} = await Auto_Exp.findOne({ where: { user_idx } });
    // select * from Auto_Exp where user_idx=useridx
    const result = {dog,cat,fish,bird}
    res.json(result)
}

exports.exp_Dog = (req:any,res:any) => {
    console.log(req.body.a)
}

exports.exp_Cat = (req:any,res:any) => {
    console.log(req.body.b)
}

exports.exp_Fish = (req:any,res:any) => {
    console.log(req.body.c)
}

exports.exp_Bird = (req:any,res:any) => {
    console.log(req.body.d)
}