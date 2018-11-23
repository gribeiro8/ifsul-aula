const user = require('../models/usuariosModel');

var controller = module.exports;

controller.login = function (application, req, res) {
  res.render("login.njk", {});
};

controller.logar = function (application, req, res, email, password) {
  usuario = user.getUsuarioEmail(email);
  if (usuario.password == password) { 
    console.log('Login realizado com sucesso');
  }else{
    return res.render("login.njk", {error: 'Dados inválidos'});
  }
}

controller.index = function (application, req, res) {
  res.render("index.njk", {
    teste : "Primeira página com ejs"
  }); // Arquivo que será renderizado
};