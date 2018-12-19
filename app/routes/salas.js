const { check, body, validationResult } = require('express-validator/check');

module.exports = function (application) {
  var controllerSalas = application.controllers.salas;

  application.get('/salas/gabriel', function (req, res) {
    controllerSalas.salagabriel(application,req,res);
  });

  application.post('/salas/gabriel', function (req, res) {
    controllerSalas.postconversa(application,req,res);
  });
 
};