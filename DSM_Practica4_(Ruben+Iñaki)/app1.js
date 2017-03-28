// JavaScript Document


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser=require('body-parser');
var parseUrlencoded=bodyParser.urlencoded({extended:false});
app.set('view engine', 'pug')

var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(express.static('public'));


io.on('connection',function(client){
	console.log('Client connected...');
	client.on('mensajeschat',function (datos){
		console.log(datos.info);
		client.broadcast.emit('mensajeschat',datos);
	});
});



app.get('/producto', function (req, res) {
	
  	if(req.query.id==1){
    res.render(
        'detalle',
        { title: 'Producto1', message: 'Producto1', descripcion: 'Descripcion producto 1', ruta: '/productos/img/fotoProducto1-1.JPG'})
	}else if(req.query.id==2){
	res.render(
        'detalle',
        { title: 'Producto2', message: 'Producto2', descripcion: 'Descripcion producto 2', ruta: '/productos/img/fotoProducto2-1.JPG'})
	}else if(req.query.id==3){
	res.render(
        'detalle',
        { title: 'Producto3', message: 'Producto3', descripcion: 'Descripcion producto 3', ruta: '/productos/img/fotoProducto3-1.JPG'})
	
	}
})


app.get('/productoAJAX', function (req, res) {
	
  	if(req.query.id==1){
   
   		res.json({ 0: '<h4>Descripción del producto: Peluche Pikachu</h4> <p>- 35 cm de altura.</p> <p>- Material: algodón de felpa.</p> <p>- Suave y con relleno.</p>',
   		1: '<h4>Fotos</h4> <p>A continuación se muestran diferentes imágenes del producto:</p> <div class="col-xs-12 text-center"><img src="img/fotoProducto1-1.jpg" width="400px" id="imagenGrandeProducto1" class="img-responsive center-block" alt=""></div><div class="col-xs-12" style="height:30px;"></div><div class="col-sm-6 col-sm-offset-3 text-center"><div class="col-xs-4"><a href="javascript:void(0)"><img src="img/fotoProducto1-1.jpg" height="140px" width="140px" onClick="zoomFoto(1,1)" alt=""></a></div><div class="col-xs-4"><a href="javascript:void(0)"><img src="img/fotoProducto1-2.jpg" height="140px" width="140px" onClick="zoomFoto(1,2)" alt=""></a></div><div class="col-xs-4"><a href="javascript:void(0)"><img src="img/fotoProducto1-3.jpg" height="140px" width="140px" onClick="zoomFoto(1,3)" alt=""></a></div></div>', 
   		2: '<h4>Precio</h4><p>A continuación se indica el precio del producto.</p><h4>Precio: <span id="precioProducto1">6,78</span>€</h4><div class="col-sm-1 col-md-1" style="text-align: center"><input type="text" class="form-control" id="cantidad1" value="1"></div><input type="button" onClick="addToChart(1)" class="btn btn-primary" value="Añadir">'});
   
	}else if(req.query.id==2){
   
   		res.json({ 0: "<h4>Descripción del producto: Cabezales cepillo de dientes</h4> <p>- El pack incluye un cabezal de cada color (amarillo, azul, verde, blanco y rosa).</p> <p>- Tamaño: 4 cm x 2.5 cm x 2cm</p> <p>- Diseño agradable y ligero</p>",
   		1: '<h4>Fotos</h4><p>A continuación se muestran diferentes imágenes del producto:</p><div class="col-xs-12 text-center"><img src="img/fotoProducto2-1.jpg" width="400px" id="imagenGrandeProducto2" class="img-responsive center-block" alt=""></div><div class="col-xs-12" style="height:30px;"></div><div class="col-sm-6 col-sm-offset-3 text-center"><div class="col-xs-4"><a href="javascript:void(0)"><img src="img/fotoProducto2-1.jpg" height="140px" width="140px" onClick="zoomFoto(2,1)" alt=""></a></div><div class="col-xs-4"><a href="javascript:void(0)"><img src="img/fotoProducto2-2.jpg" height="140px" width="140px" onClick="zoomFoto(2,2)" alt=""></a></div><div class="col-xs-4"><a href="javascript:void(0)"> <img src="img/fotoProducto2-3.jpg" height="140px" width="140px" onClick="zoomFoto(2,3)" alt=""></a></div></div>',
   		2: '<h4>Precio</h4><p>A continuación se indica el precio del producto.</p><h4>Precio: <span id="precioProducto2">0,99</span>€</h4><div class="col-sm-1 col-md-1" style="text-align: center"><input type="text" class="form-control" id="cantidad2" value="1"></div><input type="button" onClick="addToChart(2)" class="btn btn-primary" value="Añadir">'});
   
	}else if(req.query.id==3){
   
   		res.json({ 0: "<h4>Descripción del producto: Tostadora eléctrica</h4> <p>- Dispone de dos ranuras.</p> <p>- Control de potencia variable.</p> <p>- 3 funciones: Descongelar, recalentar y cancelación/parada.</p> <p>- Salta y se apaga automaticamente.</p> <p>- AC 220-240V. 50/60Hz. 600-700W.</p>",
   		1: '<h4>Fotos</h4><p>A continuación se muestran diferentes imágenes del producto:</p><div class="col-xs-12 text-center"><img src="img/fotoProducto3-1.jpg" width="400px" id="imagenGrandeProducto3" class="img-responsive center-block" alt=""></div><div class="col-xs-12" style="height:30px;"></div><div class="col-sm-6 col-sm-offset-3 text-center"><div class="col-xs-4"><a href="javascript:void(0)"><img src="img/fotoProducto3-1.jpg" height="140px" width="140px" onClick="zoomFoto(3,1)" alt=""></a></div><div class="col-xs-4"><a href="javascript:void(0)"><img src="img/fotoProducto3-2.jpg" height="140px" width="140px" onClick="zoomFoto(3,2)" alt=""></a></div><div class="col-xs-4"><a href="javascript:void(0)"><img src="img/fotoProducto3-3.jpg" height="140px" width="140px" onClick="zoomFoto(3,3)" alt=""></a></div></div>', 
   		2: '<h4>Precio</h4><p>A continuación se indica el precio del producto.</p><h4>Precio: <span id="precioProducto3">12,65</span>€</h4><div class="col-sm-1 col-md-1" style="text-align: center"><input type="text" class="form-control" id="cantidad3" value="1"></div><input type="button" onClick="addToChart(3)" class="btn btn-primary" value="Añadir">'});
   
	}
	
})


app.post('/agradecimiento', parseUrlencoded, function(request, response) {
	var recibidos=request.body;
	//console.log(recibidos.name+' + '+recibidos.email);
	if(recibidos.terminos){
		response.json('GRACIAS! Sus datos son:          nombre: '+recibidos.name
		+'         email: '+recibidos.email
		+'         mensaje: '+recibidos.message);
	}else{
		response.json('No has aceptado los terminos');
	
	}
	  //response.json(request.query.name);
	  //response.json(request.query.email);
	  //response.json(request.query.message);
	
});

/*app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
})*/

