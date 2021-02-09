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

router.get('/logout', (req, res)=>{
  res.cookie('jwt', '', {maxAge: 1});
  res.render('login');
})

module.exports = router;