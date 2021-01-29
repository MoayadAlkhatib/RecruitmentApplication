const express = require('express');
const router = express.Router();
const Controller = require('../controller/Controller');
this.Controller = new Controller();

 router.get('/', (req,res)=>{ 
   res.send(this.Controller.testConnectivity());
})

module.exports = router;