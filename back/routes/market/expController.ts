var models = require('../../models');
var { User , Auto_Gold , Auto_Exp, Status } = models;


exports.exp_Show = async(req:any,res:any) => {
    const { user_idx } = req.body;
    const {dog,cat,fish,bird} = await Auto_Exp.findOne({ where: { user_idx } });
    // select * from Auto_Exp where user_idx=useridx
    const result = {dog,cat,fish,bird}
    res.json(result)
}

exports.exp_Dog = async(req:any,res:any) => {
    const {user_idx,gold} =req.body
    const {dog} = req.body.auto_exp
    await  Auto_Exp.update(
        {dog:dog+1}, 
        {where:{user_idx}}
        );

    await User.update(
        {gold: gold-(dog+1)*1000},
        {where:{id:user_idx}}
    );

    const Dog = await Auto_Exp.findOne({where:user_idx});
    const DogGold =  await User.findOne({where:{id:user_idx}});
    const result = {
        dog:Dog.dog,
        gold:DogGold.gold
    }
    res.json(result)
}

exports.exp_Cat = async(req:any,res:any) => {
    const {user_idx, gold} = req.body
    const{cat} = req.body.auto_exp
    await Auto_Exp.update(
        {cat:cat+1},
        {where:{user_idx}}
    );

    await User.update(
        {gold:gold-(cat+1)*10000},
        {where:{id:user_idx}}
    )

    const CAT = await Auto_Exp.findOne({where:user_idx});
    const CatGold = await User.findOne({where:{id:user_idx}});

    const result = {
        cat:CAT.cat,
        gold:CatGold.gold
    }

    res.json(result)
}

exports.exp_Fish = async(req:any,res:any) => {
    const{user_idx, gold} = req.body
    const {fish} = req.body.auto_exp

    await Auto_Exp.update(
        {fish:fish+1},
        {where:{user_idx}}
    )

    await User.update(
        {gold:gold-(fish+1)*50000},
        {where:{id:user_idx}}
    )

    const FISH = await Auto_Exp. findOne({where:user_idx});
    const FishGold = await User.findOne({where:{id:user_idx}});

    const result = {
        fish:FISH.fish,
        gold:FishGold.gold
    }

    res.json(result)
}



exports.exp_Bird = async(req:any,res:any) => {
    const {user_idx, gold} = req.body
    const {bird} = req.body.auto_exp

    await Auto_Exp.update(
        {bird:bird+1},
        {where:{user_idx}}
    )

    await User.update(
        {gold:gold-(bird+1)*100000},
        {where:{id:user_idx}}
    )

    const BIRD = await Auto_Exp.findOne({where:user_idx});
    const BirdGold = await User.findOne({where:{id:user_idx}})
    const result = {
        bird:BIRD.bird,
        gold:BirdGold.gold
    }
    
    res.json(result)
}

exports.guage_Exp =async (req:any,res:any) => {
    const {exp,user_idx} = req.body
    const {dog,cat,fish,bird} = req.body.auto_exp

    await User.update(
        {exp:exp+(dog*100)+(cat*1000)+(fish*5000)+(bird*10000)},
        {where:{id:user_idx}}
    )

    const GuageExp = await User.findOne({where:{id:user_idx}})

    res.json(GuageExp.exp)
    
   
} 