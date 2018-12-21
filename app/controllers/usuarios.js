var controller = module.exports;

controller.index = function (application, req, res) {
  
  var usuariosModel = application.models.usuariosModel;
  var gruposModel = application.models.gruposModel;

  usuariosModel.getUsuarios(function(erro,usuarios){
    if(erro){
      res.send(erro)
    }else{
      gruposModel.getGrupos(function(erro,grupos){
        if(erro){
          res.send(erro)
        }else{
          res.render("usuarios/index.njk", {
            grupos : grupos,
            usuarios : usuarios
          });
        }
      });
    }
  });
};

controller.addUser = function (nome, email, senha, senha_confirma, application, req, res) {
      if(senha != senha_confirma){    
        req.flash('error', 'Há divergência nas senhas informadas!');
        res.redirect("usuarios/adicionar");
        //res.redirect("usuarios/adicionar.njk"); ?
      }else if(nome.length<=0){
        req.flash('error', 'O campo nome deve ser preenchido!');
        res.redirect("usuarios/adicionar");
        //res.redirect("usuarios/adicionar.njk"); ?
      }
      else{
        //inserirnoBD(dados);
        req.flash('error', 'Usuário adicionado com sucesso!');
        res.redirect("/usuarios/adicionar");
      }
}

controller.adicionar = function (application, req, res) {
  var gruposModel = application.models.gruposModel;

  gruposModel.getGrupos(function(erro,grupos){
    if(erro){
      res.send(erro)
    }else{
      res.render("usuarios/adicionar.njk", {
        grupos : grupos
      });
    }
  });
};

controller.postadicionar = function (application, req, res) {
  var usuariosModel = application.models.usuariosModel;
  var usuario = req.body;
  usuariosModel.salvarUsuario(usuario, function(erro,usuarios){
    if(erro){
      res.send(erro)
    }else{
      res.send(usuarios);
    }
  });
};

controller.postfoto = function (application, req, res) {
  console.log(req.files.foto);

  let arquivo = req.files.foto;
  arquivo.mv('public/img/'+req.files.foto.md5()+'.jpg', function(err) {
    if (err) {
      res.send(err);
    }else {
      var foto = req.files.foto.md5()+'.jpg';

      var usuariosModel = application.models.usuariosModel;

      usuariosModel.salvarFoto(req.params.id,foto, function(erro,usuarios){
        if(erro){
          res.send(erro);
        }else {
          res.redirect("/usuarios");
        }
      });
    }
  });
};