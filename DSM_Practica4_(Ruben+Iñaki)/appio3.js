// JavaScript Document

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static('public'));

io.on('connection',function(client){
	console.log('Client connected...');
	client.on('mensajeschat',function (datos){
		console.log(datos.info);
		client.broadcast.emit('mensajeschat',datos);
	});
});

server.listen(8080);	




