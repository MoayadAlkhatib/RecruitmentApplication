const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');

router.get('/', (req, res)=>{
    res.render('login')
  })

router.post("/",(req,res)=>{
    let{userName, passWord}= req.body;
    const err = Controller.validateLogIn(userName,passWord);
    if(err.length>0){
        res.render('login',{
            err,userName,passWord
        })
    }else{}
})
module.exports=router;