const express = require('express');
const router = express.Router();

 router.get('/', (req,res)=>{ 
  res.status(200).render('main');
})

router.get('/logout', (req, res)=>{
  res.cookie('jwt', '', {maxAge: 1});
  res.redirect('/login');
})

module.exports = router;