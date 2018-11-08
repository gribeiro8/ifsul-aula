module.exports = function (application) {
  var controller = application.controllers.grupos;

  application.get('/grupos', function(req,res){
    controller.index(application,req,res);
  });

  application.get('/grupos/adicionar', function(req,res){
    controller.adicionar(application,req,res);
  });

  application.post('/grupos/adicionar', function(req,res){
    controller.postadicionar(application,req,res);
  });

};