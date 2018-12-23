"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressEdge = require("express-edge");

var _expressEdge2 = _interopRequireDefault(_expressEdge);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import newMember from 'database/models/newMember.js'

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: true
}));
//public folder for static assets
app.use(_express2.default.static('public'));

app.use(_expressEdge2.default);
app.set('views', __dirname + "/views");

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

app.post();

app.listen(process.env.PORT || 4000, function () {
    return console.log("Web Server started ");
});