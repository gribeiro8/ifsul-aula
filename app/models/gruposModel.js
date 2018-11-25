var pool = require('../../config/dbPool');

module.exports = grupos

  grupos.getGrupos = function(callback){
    pool.getConnection(function(err,connection){
      connection.query('Select * from grupos;', callback);
      connection.release();
   });
  }

  grupos.salvarGrupo = function(grupo, callback){
    pool.getConnection(function(err,connection){
      connection.query('Insert into grupos set ?',grupo, callback);
      connection.release();
   });
  }