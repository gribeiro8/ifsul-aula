module.exports = function (application) {
  var controller = application.controllers.usuarios;

  application.get('/usuarios', function(req,res){
    controller.index(application,req,res);
  });

  application.get('/usuarios/adicionar', function(req,res){
    controller.adicionar(application,req,res);
  });

  application.post('/usuarios/adicionar', function(req,res){
    controller.postadicionar(application,req,res);
  });

  application.get('/usuarios/foto/:id', function(req,res){
    controller.foto(application,req,res);
  });

  application.post('/usuarios/foto/:id', function(req,res){
    controller.postfoto(application,req,res);
  });

};