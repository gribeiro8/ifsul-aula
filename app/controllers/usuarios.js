var controller = module.exports;

controller.index = function (application, req, res) {
  
  var usuariosModel = application.models.usuariosModel;
  var gruposModel = application.models.gruposModel;

  usuariosModel.getUsuariosEspecial(
    "u.*, g.nome as gruponome",
    " inner join grupos as g on u.grupos_id = g.id ",
    "",
    function(erro,usuarios){
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
  delete usuario.senha_confirma;
  usuariosModel.salvarUsuario(usuario, function(erro,usuarios){
    if(erro){
      res.send(erro)
    }else{
      res.redirect('/usuarios');
    }
  });
};
controller.postfoto = function (application, req, res) {

};
