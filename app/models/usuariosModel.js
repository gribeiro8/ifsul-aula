var pool = require('../../config/dbPool');

module.exports = function(){

  this.getUsuarios = function(callback){
    pool.getConnection(function(err,connection){
      connection.query('Select * from usuarios;', callback);
      connection.release();
   });
  }

  this.salvarUsuario = function(usuario, callback){
    pool.getConnection(function(err,connection){
      connection.query('Insert into usuarios set ?',usuario, callback);
      connection.release();
   });
  }
  
  return this;
}