const express = require("express");
const app = express();
const expressEdge= require('express-edge');
const path = require("path");
require('dotenv').config();
const bodyParser= require('body-parser')


//public folder for static assets
app.use(express.static('public'));

app.use(expressEdge);
app.set('views', `${__dirname}/views`);

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/about', (req,res)=>{
    res.render('about');
});

app.get('/join', (req,res)=>{
    res.render('join')
});

app.get('/contact', (req,res)=>{
    res.render('contact')
});




const port= 4000;

app.listen(port, ()=> console.log(`Web Server started on port: ${port}`));