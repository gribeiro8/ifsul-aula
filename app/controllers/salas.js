const user = require('../models/usuariosModel');

var controller = module.exports;

controller.salagabriel = function (application, req, res) {
  var moment = require('moment');
  //cria a conexão baseada no servidor -> application.get ... esta configurado no app.js
  var io = require('socket.io')(application.get('server'), { origins: '*:*'});

/* criar a conexão por websocket */
io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

  // recebe a mensagem vinda do servidor
	socket.on('msgParaServidor', function(data){
    //mensagem vem no data
    console.log(data);

    // responde a mensagem
		socket.emit(
			'msgParaCliente', 
			{usuario: req.session.nome, mensagem: data.mensagem, horario: moment().format('HH:mm')}
		);

		/*socket.broadcast.emit(
			'msgParaCliente', 
			{usuario: req.session.nome, mensagem: data.mensagem, horario: moment().format('hh:mm')}
    );*/
	});

});
  /*var dadosForm = req.body;
  console.log(dadosForm);
  application.get('io').emit(
		'msgParaCliente',
		{apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat'}
  )*/
  
  res.render("salas/gabriel.njk",{'datahoje':moment().format('DD/MM')});
};