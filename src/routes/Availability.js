const express = require('express');
const Controller = require('../controller/Controller');
const router = express.Router();

let controller = new Controller();

router.get('/', (req, res)=>{
    res.render('availability');
});

router.post('/', async(req, res)=>{
    console.log(req.body.from_date);
    await controller.createAvailability(res.locals.user.id,
        req.body.from_date, req.body.to_date);
        res.render('availability');
})
module.exports=router;