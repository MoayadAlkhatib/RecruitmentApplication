const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');
this.Controller = new Controller();

 router.get('/', (req,res)=>{ 
   this.Controller.testConnectivity()
   .then(()=>{ res.status(200).send('Database connected....')
}).catch(err => {
    res.send('error: '+ err);
});
})

router.get('/registration', (req, res)=>{
  res.render('registration')
})

router.post('/registration', (req, res)=>{
  let {firstName, lastName} = req.body;
  //console.log(firstName + lastName);
  console.log(Controller.validateTheForm(firstName, lastName));
})

module.exports = router;