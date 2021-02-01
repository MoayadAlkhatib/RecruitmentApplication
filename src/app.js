const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
 console.log(`Listining on Port: ${PORT}`)
});

app.engine('handlebars', exphbs({defaultLayout: 'default'}));
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
    res.send('<h1>Hello world<h1>');
})

app.use(express.static(path.join(__dirname, '../public')));

//All routes
app.use('/Dashboard', require('./routes/Dashboard'));