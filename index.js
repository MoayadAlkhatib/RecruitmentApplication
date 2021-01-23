const express = require('express');
const app = express();

const PORT = process.env.PORT || 1234;
app.listen(PORT, () =>{
 console.log(`Listining on Port: ${PORT}`)
});

app.get('/', (req, res)=>{
    res.send('<h1>helo World<h1>');
})
