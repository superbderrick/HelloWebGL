var express = require("express");
var route = express.Router();

//main page router

route.get('/' , function (req , res) {
	res.render('position');
});
route.get('/signup' , function (req , res) {
	res.render('signup');
});

route.get('/index' , function (req , res) {
	res.render('index');
});

route.get('/reset' , function (req , res) {
	res.render('index');
});

route.get('/about' , function (req , res) {
	res.render('about');
});

route.get('/insert' , function (req , res) {
	res.render('insert');
});

route.get('/menulogs' , function (req , res) {
	res.render('menulogs');
});


module.exports = route;
