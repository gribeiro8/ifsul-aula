var controller = module.exports;

controller.login = function (application, req, res) {
  res.render("login.njk", {}); 
};

controller.index = function (application, req, res) {
  res.render("index.njk", {
    teste : "Primeira página com ejs"
  }); // Arquivo que será renderizado
};