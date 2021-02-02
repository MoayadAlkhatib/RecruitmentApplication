const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');
this.Controller = new Controller();

 router.get('/', (req,res)=>{ 
   this.Controller.testConnectivity()
   .then(()=>{ res.status(200).render('main')
}).catch(err => {
    res.send('error: '+ err);
});
})

router.get('/registration', (req, res)=>{
  res.render('registration')
})

router.post('/registration', (req, res)=>{
  let {firstName, lastName, emailAddress, dateOfBirth, userName,
  Password, repeatPassword} = req.body;

  const err = Controller.validateTheForm(firstName, lastName, emailAddress, 
    dateOfBirth, userName, Password, repeatPassword);

  //console.log(firstName + lastName, emailAddress);
  //console.log(Controller.validateTheForm(firstName, lastName, emailAddress, 
  //  dateOfBirth, userName, Password, repeatPassword));
  if(err.length>0){
        res.render('registration', {
          err
        })
      }
})

module.exports = router;