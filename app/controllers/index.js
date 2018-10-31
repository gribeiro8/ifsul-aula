var controller = module.exports;

controller.index = function (application, req, res) {
  res.render("index", {
    teste : "Primeira página com ejs"
  }); // Arquivo que será renderizado
};