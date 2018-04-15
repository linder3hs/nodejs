
var http = require('http');
var url = require('url');
var fs = require('fs');


var ruta = require('./rutas.js');
http.createServer(function( req, res) {
    var pathname = url.parse(req.url).pathname;
    var r = new ruta(res, pathname);
    var confirmar = fs.readFileSync('./confirmar.html');
    var contacto = fs.readFileSync('./contacto.html');

    if (req.method == "POST") {
        req.on('data', function (data) {
            dataString = +data
        });
        req.on('end', function () {
           console.log("ES un metodo post");
           res.end(confirmar.toString());
        })
    }
    
}).listen(9000, function () {
    console.log("Se inicio el servicio");
});
