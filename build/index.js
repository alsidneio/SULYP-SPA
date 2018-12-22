"use strict";

var express = require("express");
var app = express();
var expressEdge = require('express-edge');
var path = require("path");
require('dotenv').config();
var bodyParser = require('body-parser');

//public folder for static assets
app.use(express.static('public'));

app.use(expressEdge);
app.set('views', __dirname + "/../views");

app.get('/', function (req, res) {
    res.render('index');;
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/join', function (req, res) {
    res.render('join');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.listen(process.env.PORT || 4000, function () {
    return console.log("Web Server started ");
});