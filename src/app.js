const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
 console.log(`Listining on Port: ${PORT}`)
});
app.use(express.json()); 

app.get('/', (req, res)=>{
    res.send('<h1>Hello world<h1>');
})

app.use('/Dashboard', require('./views/dashboard'));