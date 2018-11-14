var express = require('express'); //chamando o modulo
var consign = require('consign');
var body = require('body-parser');
const nunjucks = require("nunjucks");
var path = require('path');


var app = express();

nunjucks.configure('app/views', {
  autoescape: true,
  express: app
});

app.use('/', express.static('./public'));
app.use(express.urlencoded({
  extended: false
}));
app.use(body.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));


consign({
    cwd: 'app'
  })
  .include('controllers')
  .then('routes')
  .then('models')
  .into(app);

module.exports = app;