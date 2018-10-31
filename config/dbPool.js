var mysql = require('mysql');
var config = require('../config.json');

var local = process.argv[2]=='3000' ? 'local' : 'servidor';

var pool  = mysql.createPool({
   connectionLimit : 100, //important
   host: config[local].host,
   user: config[local].user,
   password: config[local].password,
   database: config[local].database,
   socketPath: config[local].socketPath,
   debug    :  false
});
module.exports = pool;