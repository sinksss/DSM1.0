var express = require('express')  
var app = express()  
app.set('view engine', 'pug')

app.get('/producto1', function (req, res) {  
    res.render(
        'index',
        { title: 'Producto1', message: 'Producto1'})
})

app.get('/producto2', function (req, res) {  
    res.render(
        'index',
        { title: 'Producto2', message: 'Producto2'})
})

app.get('/producto3', function (req, res) {  
    res.render(
        'index',
        { title: 'Producto3', message: 'Producto3'})
})

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
})