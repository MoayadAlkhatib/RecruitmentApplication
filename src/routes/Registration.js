const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');
const bcrypt = require('bcrypt');
const Auth = require('./auth/Auth');

let controller = new Controller();

router.get('/', (req, res)=>{
    res.render('registration')
  })

  router.post('/', async(req, res)=>{
    let role_id;
    let {name, surname, email, ssn, username,
      password, repeatPassword} = req.body;
  
    const err = controller.validateTheForm(name, surname, email, ssn, username,
      password, repeatPassword);
  
    //console.log(firstName + lastName, emailAddress);
    //console.log(controller.validateTheForm(firstName, lastName, emailAddress, 
    //  dateOfBirth, userName, Password, repeatPassword));
    if(err.length>0){
          res.render('registration', {
            err, name, surname, email, ssn, username,
            password, repeatPassword
          })
        }else{
          let t = await controller.beginATransaction();

          try{
            let salt= await bcrypt.genSalt();

            let user= await controller.createUser(name, surname, ssn, email,
              await bcrypt.hash(password,salt),
               role_id,username, t);

               let token= Auth.createToken(user.id);
               res.cookie('jwt', token, {httpOnly: true, maxAge:1000 * 24 * 60 * 60});

               res.redirect('dashboard');
               await t.commit();

          }
          catch(errors){
              console.log(errors.errors[0].message);
              err.push({message: errors.errors[0].message});

                res.render('registration',{
                  err, name, surname, email, ssn, username
                }); 

                t.rollback();
            }
        }
  })
  module.exports = router;