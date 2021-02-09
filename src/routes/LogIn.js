const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');

router.get('/', (req, res)=>{
    res.render('login')
  })

router.post("/",async (req,res)=>{
    let{username, password}= req.body;
    //console.log(username + password);
    const err = Controller.validateLogIn(username,password);
    if(err.length>0){
        res.render('login',{
            err,username,password
        })
    }else{
        try{
        let controller = new Controller();
        let user= await controller.signIn(username, password);
        console.log();
        res.render('dashboard', {
            user
        })
        }catch(error){
            console.log(error);
            err.push({message: error.message});
            res.render('login',{
                err, username, password
            })
        }
    }
})
module.exports=router;