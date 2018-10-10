module.exports= function(app){

  var mysql = require('mysql');

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bancoaula'
  })


app.get("/usuarios", function(req,res){

  var sql = "SELECT u.*, g.nome as nomegrupo FROM usuarios as u "+
  "inner join grupos as g on u.grupos_id=g.id";

 connection.query(sql, function(error, usuarios){
   if(error){
     console.log(error);
   }else{
    res.render("usuarios/index",{
      usuarios:usuarios
    });
   }
 })
});

app.get("/usuarios/adicionar", function(req,res){
  res.render("usuarios/index");
});

app.get("/usuarios/editar", function(req,res){
  res.render("usuarios/index");
});

}