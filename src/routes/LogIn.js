const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');

router.get('/', (req, res)=>{
    res.render('login')
  })

router.post("/",(req,res)=>{
    let{username, password}= req.body;
    console.log(username + password);
    const err = Controller.validateLogIn(username,password);
    if(err.length>0){

        res.render('login',{
            err,username,password
        })
    }else{
    }
})
module.exports=router;