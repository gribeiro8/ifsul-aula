var pool = require('../../config/dbPool');

var user = module.exports

  user.getUsuarios = function(callback){
    pool.getConnection(function(err,connection){
      connection.query('Select * from usuarios;', callback);
      connection.release();
   });
  }

  user.salvarUsuario = function(usuario, callback){
    pool.getConnection(function(err,connection){
      connection.query('Insert into usuarios set ?',usuario, callback);
      connection.release();
   });
  }

  user.getUsuarioEmail = function(email, callback){
    pool.getConnection(function(err,connection){
      connection.query('Select * from usuarios where email="'+email+'"', callback);
      connection.release();
   });
  }