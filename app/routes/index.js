module.exports = function (application) {
  var controllerIndex = application.controllers.index;

  application.get('/', function (req, res) {
     controllerIndex.index(application,req,res);
  });

};