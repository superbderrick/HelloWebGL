var express = require("express");
var app = express();
var router = express.Router();
var path = require('path');

app.set("view engine" , 'ejs');
app.use(express.static(path.join(__dirname , 'public')));

// var data = { count : 0 };

app.get('/' , function (req , res) {
	res.render('index');
});

app.get('/reset' , function (req , res) {
	res.render('index');
});


// app.get('/set/count' , function (req , res) {
// 	if(req.query.count) data.count = req.query.count;
// 	res.render('my_first_ejs' , data);
// });

// app.get('/set/:num' , function (req , res) {
// 	data.count=req.params.num;
// 	res.render('my_first_ejs' , data);
// });


app.get('/about' , function (req , res) {
	res.render('about');
});

app.get('/contact' , function (req , res) {
	res.render('about');
});


app.listen(8080,function(){
  console.log("Start at Server 8080");
});