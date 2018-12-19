const user = require('../models/usuariosModel');

var controller = module.exports;

controller.login = function (application, req, res) {
  var gruposModel = application.models.gruposModel;
  gruposModel.getGrupos(function(erro,grupos){
    if(erro){
      res.send(erro)
    }else{
      res.render("login.njk", {
        grupos : grupos
      });
    }
  });
};

controller.logar = function (email, password, application, req, res) {

  user.getUsuarioEmail(email, function(err, usuario){
    if (err) return res.send(err);
    if(usuario.length>0){ // Testa se achou algo no banco com esse usuario e senha

      if (usuario[0].senha == password) {
        req.session.email = email;
        req.session.password = password;
        console.log(req.session.email);
        console.log(req.session.password); 
        res.render("index.njk");
      }
      else if(usuario[0].senha != password){    
        req.flash('error', 'Senha incorreta!');
        res.redirect("/");
      }
    } else{ 
      req.flash('error', 'Email incorreto!');
      res.redirect("/");
    }
  });
}

controller.index = function (application, req, res) {
  res.render("index.njk", {
    teste : "Primeira página com ejs"
  }); // Arquivo que será renderizado
};