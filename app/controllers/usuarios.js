var controller = module.exports;

controller.index = function (application, req, res) {
  
  var usuariosModel = application.models.usuariosModel;

  usuariosModel.getUsuarios(function(erro,usuarios){
    if(erro){
      res.send(erro)
    }else{
      res.render("usuarios/index.njk", {
        usuarios : usuarios
      });
    }
  });
};
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