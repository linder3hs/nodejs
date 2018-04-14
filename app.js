
var http = require('http');
var url = require('url');
var fs = require('fs');
var ruta = require('./rutas.js');
http.createServer(function( req, res) {
    var pathname = url.parse(req.url).pathname;
    var r = new ruta(res, pathname);

}).listen(9000);