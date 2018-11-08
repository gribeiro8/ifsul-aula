var controller = module.exports;

controller.index = function (application, req, res) {
  
  var gruposModel = application.models.gruposModel;

  gruposModel.getGrupos(function(erro,grupos){
    if(erro){
      res.send(erro)
    }else{
      res.render("grupos/index", {
        grupos : grupos
      });
    }
  });
};
controller.adicionar = function (application, req, res) {
  res.render("grupos/adicionar", {
  });
};

controller.postadicionar = function (application, req, res) {
  var gruposModel = application.models.gruposModel;
  var grupo = req.body;
  gruposModel.salvarGrupo(grupo, function(erro,grupos){
    if(erro){
      res.send(erro)
    }else{
      res.send(grupos);
    }
  });
};