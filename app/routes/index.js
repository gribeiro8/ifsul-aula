const { check, body, validationResult } = require('express-validator/check');

module.exports = function (application) {
  var controllerIndex = application.controllers.index;
  var controllerUsuarios = application.controllers.usuarios;

  application.get('/', function (req, res) {
     controllerIndex.login(application,req,res);
  });

  application.get('/index', function (req, res) {
    controllerIndex.index(application,req,res);
  });

  application.post('/auth', [

      body('email').isEmail(),
      body('password').isLength({ min: 5 })],
      function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          req.flash('error', 'Preencha os dados corretamente!');
          res.redirect('/');
        }else{
          controllerIndex.logar(req.body.email, req.body.password, application,req,res);
        }
      });

      application.post('/add',function (req, res) {
        controllerUsuarios.addUser(req.body.nome, req.body.email, req.body.senha, req.body.senha_confirma, application,req,res);
      });   

};