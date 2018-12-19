var express = require('express');
var consign = require('consign');
var body = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
const nunjucks = require("nunjucks");
var path = require('path');
var MySQLStore = require('express-mysql-session')(session);

var config = require('../config.json');

var sessionStore = new MySQLStore(config.local);

var app = express();

nunjucks.configure('app/views', {
  autoescape: true,
  express: app
});

app.use(flash()); // usando flash

app.use(session({
  key: 'session',
  secret: 'session_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));

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