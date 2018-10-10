var app = require('./config/server');

var rotasIndex = require('./app/routes/index')(app);
var rotasUsuarios = require('./app/routes/usuarios')(app);

var porta = 3000;
app.listen(porta, function(){
  console.log("Servidor funcionando na porta "+porta);  
});