const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');
let controller = new Controller();

router.get('/', async(req,res)=>{ 
    let applicants= await controller.getAllApplicants();
    let applicant=[];
    //console.log(applicants[0].name);
    for(let i=0; i<applicants.length; i++){
        applicant.push({name: applicants[i].name,
        surname: applicants[i].surname,
        email: applicants[i].email})
    }
    res.render('admin', {applicant: applicant});
 })
 module.exports=router;