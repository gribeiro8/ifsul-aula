var app = require('./config/server');

var porta = 3000;
app.listen(porta,function(){
  console.log("Servidor rodando na porta "+porta);
  
  
})