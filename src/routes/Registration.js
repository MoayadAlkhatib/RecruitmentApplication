const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');

router.get('/', (req, res)=>{
    res.render('registration')
  })

  router.post('/', (req, res)=>{
    let role_id = 2;
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
           controller.createUser(name, surname, ssn, email, password,
            role_id, username);
            res.render('main');
        }
  })
  module.exports = router;