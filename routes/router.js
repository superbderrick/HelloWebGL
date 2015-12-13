var express = require("express");
var route = express.Router();

//main page router

route.get('/' , function (req , res) {
	res.render('index');
});

route.get('/reset' , function (req , res) {
	res.render('index');
});

route.get('/about' , function (req , res) {
	res.render('about');
});

route.get('/contact' , function (req , res) {
	res.render('contact');
});

route.get('/menulogs' , function (req , res) {
	res.render('menulogs');
});


module.exports = route;
