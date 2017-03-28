// JavaScript Document

var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var parseUrlencoded=bodyParser.urlencoded({extended:false});
app.set('view engine', 'pug')

app.use(express.static('public'));


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

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
})