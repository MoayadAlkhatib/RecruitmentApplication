const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');

router.get('/', (req, res)=>{
    res.render('registration')
  })
  
  router.post('/', (req, res)=>{
    let {firstName, lastName, emailAddress, dateOfBirth, userName,
    Password, repeatPassword} = req.body;
  
    const err = Controller.validateTheForm(firstName, lastName, emailAddress, 
      dateOfBirth, userName, Password, repeatPassword);
  
    //console.log(firstName + lastName, emailAddress);
    //console.log(Controller.validateTheForm(firstName, lastName, emailAddress, 
    //  dateOfBirth, userName, Password, repeatPassword));
    if(err.length>0){
          res.render('registration', {
            err, firstName, lastName, emailAddress, dateOfBirth, userName,
            Password, repeatPassword
          })
        }else{
  
        }
  })
  module.exports = router;