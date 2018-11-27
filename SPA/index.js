const express = require("express");
const app = express();
const path = require("path");
const events = require('./public/scripts/Events')

//public folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


const port= 4000;


app.listen(port, ()=> console.log(`Web Server started on port: ${port}`));