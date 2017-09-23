var express = require("express");
var mongoose = require('mongoose');

// Conexión a la bdd
mongoose.connect('mongodb://127.0.0.1:27017?ext.ssh.server=desarrolloupe.sytes.net:16330&ext.ssh.username=grupo3&ext.ssh.password=desarrolloupe/jobbox', function(err, res) {
  if(err) throw err;
  console.log('Conectado con éxito a la BD');
});


// Iniciamos la aplicación Express
var app = express();

	// Configuración de Passport. Lo inicializamos
	// y le indicamos que Passport maneje la Sesión
	// app.use(passport.initialize());
	// app.use(passport.session());
	// app.use(app.router);


// Configuración Puerto de escucha
app.set("port",(process.env.PORT || 5600));
app.listen(app.get("port"),()=>{
    console.log("puerto: ",app.get("port"))
})