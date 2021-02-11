const express = require('express');
const router = express.Router();
const Handlebars = require('handlebars');
const Controller = require('../controller/Controller');
const Competence = require('../model/Competence');
let controller = new Controller();

router.get('/', async(req,res)=>{ 
     res.status(200).render('dashboard');
     await controller.createComp('Karuselldrift').then((competence)=>{
        console.log(competence);
     })  
 });

 /**
  * make options for years of experiance field from 1 to 50.
  */
 Handlebars.registerHelper("list", function(context, options) {
    var ret = "<div>";

    for (let i =1; i <= 50; i++) {
      ret = ret + "<option value="+i+">" + i +"</option>";
    }

    return ret + "</div>";
  });

 module.exports = router;