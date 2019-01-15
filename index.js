const express = require("express");
const app = express();
const expressEdge= require('express-edge');
const path = require("path");
require('dotenv').config();
const bodyParser= require('body-parser');

//public folder for static assets
app.use(express.static('public'));
app.use(expressEdge);
app.set('views', `${__dirname}/views`);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req,res)=>{
    res.render('index');;
});

app.get('/about', (req,res)=>{
    res.render('about');
});

app.get('/join', (req,res)=>{
    res.render('join');
});

app.get('/contact', (req,res)=>{
    res.render('contact');
});
app.get('/register', (req,res)=>{
    res.render('register');
});
app.get('/donate', (req,res)=>{
    res.render('donate');
});
app.get('/thisweek', (req,res)=>{
    res.render('thisweek');
});
app.get('/calendar', (req,res)=>{
    res.render('calendar');
});





app.listen(process.env.PORT ||4000, ()=> console.log(`Web Server started `));