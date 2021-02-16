const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');
let controller = new Controller();

router.get('/', async(req,res)=>{ 
    let applicants= await controller.getAllApplicants();
    console.log(applicants);
    res.render('admin', applicants);
 })
 module.exports=router;