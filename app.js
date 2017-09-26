var express = require("express");
var mongoose = require('mongoose');

// Conexión a la bdd
// mongoose.connect('mongodb://127.0.0.1:27017?ext.ssh.server=desarrolloupe.sytes.net:16330&ext.ssh.username=grupo3&ext.ssh.password=desarrolloupe/jobbox', function(err, res) {
//   if(err) throw err;
//   console.log('Conectado con éxito a la BD');
// });

// var  app= express();
// Iniciamos la aplicación Express


	// Configuración de Passport. Lo inicializamos
	// y le indicamos que Passport maneje la Sesión
	// app.use(passport.initialize());
	// app.use(passport.session());
	// app.use(app.router);


<<<<<<< HEAD
// Configuración Puerto de escucha AIzaSyC7u-5CW2F-ie8JWnnAvWG4xMNp_2liCcI

var app = express();

app.use(express.static("public"));

=======
// Configuración Puerto de escucha
app.use(express.static("public"));
>>>>>>> 35ba21ccb657378933682a4210098716efea9805
app.set("port",(process.env.PORT || 5600));
app.listen(app.get("port"),()=>{
    console.log("puerto: ",app.get("port"))
});