

 var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var mySql = require('mySql');

//server
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'burger_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

  console.log('connected as id ' + connection.threadId);

//handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



//sequlize
var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password');

var burgerstack = sequelize.define('burger',{
	name: Sequelize.STRING(30),
	
	eaten: Sequelize.BOOLEAN 
	
})


var burgers = [];
var eatenburg = [];

app.post('/toindex', function(req,res) {
  //handlebars requires an object to be sent to the index handlebars file
sequelize.sync().then(function() {
  return Burger.create({
    burgername : burgerName ,
    eaten: false 
  });
}).then(function(burg){
	burgers.append(burgerName);
	console.log(burgers);
//makes burger buttons for available burgers
  for(i=0; i<burgers.length; i++){
  	if (burg.eaten==false)
  res.render("index",burgerstack[i]);
  }
//makes burger buttons for eaten burgers
  	app.post('/eat',function(req,res){
  		Burger.findAll({
  where: {
    burgername: req,
    eaten: false
  }}).then(req.setDataValue('eaten',true);
  res.render("index",ateStack[i])
  	})