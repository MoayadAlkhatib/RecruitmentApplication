const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8877;
app.listen(PORT, () =>{
 console.log(`Listining on Port: ${PORT}`)
});

app.engine('handlebars', exphbs({defaultLayout: 'default'}));
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../public')));

//All routes
app.use('/', require('./routes/Dashboard'));
app.use('/registration', require('./routes/Registration'));
app.use('/login', require('./routes/LogIn'));