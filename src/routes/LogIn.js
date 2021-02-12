const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');
const User = require('../model/User');

router.get('/', (req, res)=>{
    res.render('login')
  })

router.post("/",async (req,res)=>{
    let{userName, passWord}= req.body;
    const err = Controller.validateLogIn(userName,passWord);
    if(err.length>0){
        res.render('login',{
            err,userName,passWord
        })
    }else{
        let user = await User.findOne({username:req.body.username});
        if(!user) res.status(400).send("Invalid user");
        else res.render("dashboard");
    }
})
module.exports=router;