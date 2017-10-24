// Incluímos las dependencias que vamos a usar,
// importamos Express
// con http creamos el servidor que posteriormente escuchará en el puerto 3000
var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app),
    path    = require('path'),
    log     = require('./libs/log')(module),
    config  = require('./libs/config');
    mongoose = require("mongoose");

var fs = require('fs');
var https = require('https');
const PORT = 5600;
const IPACEPT = "0.0.0.0";

require('./lib/db')(app);


// Configuramos la app para que pueda realizar métodos REST
// con bodyParser() permitimos que pueda parsear JSON
// con methodOverride() nos permite implementar y personalizar métodos HTTP
// app.router nos permite crear rutas personalizadas

app.configure(function () {
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});
app.configure('development', function () {
    app.use(express.errorHandler());
});


app.use(function(req, res, next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

// routes = require('./routes/tshirts')(app);
// routes = require('./routes/usuarios')(app);

// bootstrap our routes
var routePath = __dirname + '/routes/';
fs.readdirSync(routePath).forEach(function (file) {
    require(routePath + file)(app);
});



// // petición GET del root que sólo muestre "Hello world!"
// app.get('/', function(req, res) {
//   res.send("Hello world!");
// });




https.createServer({
    key: fs.readFileSync('./certs/jobbox.key'),
    cert: fs.readFileSync('./certs/jobbox.crt')
}, app).listen(PORT, IPACEPT, function(){
    console.log("My https server listening on port " + PORT + "...");
});

app.get('/foo', function(req, res){
    console.log('Hello, I am foo.');
});


// // El servidor escucha en el puerto 3000
// // server.listen(3000, function() {
// server.listen(5600, function() {
//   console.log("Node server running on http://localhost:5600");
// });