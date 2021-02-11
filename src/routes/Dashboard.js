const express = require('express');
const router = express.Router();
const Handlebars = require('handlebars');

router.get('/', (req,res)=>{ 
     res.status(200).render('dashboard')
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