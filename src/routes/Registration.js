const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');
const bcrypt = require('bcrypt');
const Auth = require('./auth/Auth');

router.get('/', (req, res)=>{
    res.render('registration')
  })

  router.post('/', (req, res)=>{
    let role_id;
    let {name, surname, email, ssn, username,
      password, repeatPassword} = req.body;
  
    const err = Controller.validateTheForm(name, surname, email, ssn, username,
      password, repeatPassword);
  
    //console.log(firstName + lastName, emailAddress);
    //console.log(Controller.validateTheForm(firstName, lastName, emailAddress, 
    //  dateOfBirth, userName, Password, repeatPassword));
    if(err.length>0){
          res.render('registration', {
            err, name, surname, email, ssn, username,
            password, repeatPassword
          })
        }else{
          let controller = new Controller();
          
           controller.createUser(name, surname, ssn, email,
            password,
             role_id,username)
            .then(user =>{
              let token= Auth.createToken(user.id);
              res.cookie('jwt', token);
             })
            .then(()=>res.render('dashboard'))
            .catch((errors)=>{
              console.log(errors.message);
              err.push({message: errors.message});

                res.render('registration',{
                  err, name, surname, email, ssn, username
                }); 
            });
        }
  })
  module.exports = router;