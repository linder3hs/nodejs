
const fs = require('fs');

var rutas = function(res, pathname) {
    if (pathname == '/') {
        fs.readFile('./index.html', function (error, html) {
            res.write(html);
            res.end();
        });
 
    }
    if (pathname == '/nosotros') {
        fs.readFile('./nosotros.html', function (error, html) {
            res.write(html);
            res.end();
        });
 
    }
    if (pathname == '/servicios') {
         fs.readFile('./servicio.html', function (error, html) {
             res.write(html);
             res.end();
         });
 
    }
    if (pathname == '/contacto') {
         fs.readFile('./contacto.html', function (error, html) {
             res.write(html);
             res.end();
         });
    }
    if (pathname == '/img/nosotros.jpg') {
         fs.readFile('./img/nosotros.jpg', function(error, html) {
             res.write(html);
             res.end();
         });
    }
    if (pathname == '/img/inicio.jpg') {
         fs.readFile('./img/inicio.jpg', function(error, html) {
             res.write(html);
             res.end();
         });
    }
    if (pathname == '/img/servicio.jpg') {
         fs.readFile('./img/servicio.jpg', function(error, html) {
             res.write(html);
             res.end();
         });
    }
    if (pathname == '/img/contacto.jpg') {
        fs.readFile('./img/contacto.jpg', function(error, html) {
            res.write(html);
            res.end();
        });
   }
    if (pathname == '/otro/index.html') {
        fs.readFile('./otro/index.html', function(error, html) {
            res.write(html);
            res.end();
        });
    }
    if (pathname == '/otro/css/bootstrap.js') {
        fs.readFile('./otro/css/bootstrap.js', function(error, html) {
            res.write(html);
            res.end();
        });
    }
    if (pathname == '/img/team02.jpg') {
        fs.readFile('./img/team02.jpg', function(error, html) {
            res.write(html);
            res.end();
        });
    }
    if (pathname == '/img/team03.jpg') {
        fs.readFile('./img/team03.jpg', function(error, html) {
            res.write(html);
            res.end();
        });
    }
    if (pathname == '/img/thalia.jpeg') {
        fs.readFile('./img/thalia.jpeg', function(error, html) {
            res.write(html);
            res.end();
        });
    }
}

module.exports = rutas;