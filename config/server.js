var express = require('express'); //chamando o modulo
var consign = require('consign');
var body = require('body-parser');


var app = express();

app.set("view engine","ejs"); //definindo o motor de view
app.set('views','./app/views'); // definindo a pasta da view

app.use(body.urlencoded({extended:true}));

consign({cwd:'app'})
.include('controllers')
.then('routes')
.then('models')
.into(app);

module.exports = app;