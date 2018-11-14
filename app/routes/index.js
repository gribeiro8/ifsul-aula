module.exports = function (application) {
  var controllerIndex = application.controllers.index;

  application.get('/', function (req, res) {
     controllerIndex.login(application,req,res);
  });

  application.get('/index', function (req, res) {
    controllerIndex.index(application,req,res);
 });

};