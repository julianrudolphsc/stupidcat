var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var app = express();

//app config
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//routes
//home route
app.get('/', function(req, res){
  res.redirect('/cats');
});

//RESTful Routes
//index /cats
app.get('/cats', function(req, res){
  res.render('cats');
});

//listener
app.listen(3000, function(){
  console.log("Server Started!");
});
