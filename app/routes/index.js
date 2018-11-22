const { check, validationResult } = require('express-validator/check');

module.exports = function (application) {
  var controllerIndex = application.controllers.index;

  application.get('/', function (req, res) {
     controllerIndex.login(application,req,res);
  });

  application.get('/index', function (req, res) {
    controllerIndex.index(application,req,res);
  });

 application.get('/auth', [
      check('username').isEmail()
    ], function (req, res) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      
  });

};