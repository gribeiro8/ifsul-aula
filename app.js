var app = require('./config/server');

var porta = 3000;
var server = app.listen(porta,function(){
  console.log("Servidor rodando na porta "+porta);
})

app.set('server',server);


//console.log(app.settings.io);