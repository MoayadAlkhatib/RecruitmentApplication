const express = require('express');
const router = express.Router();
const Handlebars = require('handlebars');
const Controller = require('../controller/Controller');

let controller = new Controller();
let comps=[];

router.get('/', async(req,res)=>{ 
     //await controller.createComp('karuselldrift');
     let competences= await controller.getComp();
     comps=competences;
     res.status(200).render('dashboard'); 
 });

 router.post('/', async (req, res)=>{
     let err = controller.validateCompetence(req.body.area, req.body.years);

     if(err.length>0){
         res.render('dashboard', {err: err});
     }else{
     let application=[];

     application.push({
         userId: res.locals.user.id,
         area: req.body.area,
         years: req.body.years
     });

     let t = await controller.beginATransaction();
     
     try{   

      await controller.createCompProfile(res.locals.user.id,
        controller.getCompid(comps, req.body.area),
        parseInt(req.body.years), t);
        res.render('dashboard', {application: application});

        await t.commit();

     }catch(error){
       if(error.message == 'Validation error'){
        err.push({message: 'You have already entered this competence.'});
       }
       res.render('dashboard', {err: err});
       await t.rollback();
     }

    }
 })

 /**
  * make options for years of experiance field from 1 to 50.
  */
 Handlebars.registerHelper("yearsOfExp", function(context, options) {
    var ret = "<div>";

    for (let i =1; i <= 50; i++) {
      ret = ret + "<option value="+i+">" + i +"</option>";
    }

    return ret + "</div>";
  });

  /**
  * get the areas of experinces from the database and insert them to the form.
  */
 Handlebars.registerHelper("areas", function(context, options) {
    var ret = "<div>";

        for (let i =0; i < comps.length; i++) {
            ret = ret + "<option>" + comps[i].name +"</option>";
          }

    //console.log(comps[0].name);

    return ret + "</div>";
  });

 module.exports = router;