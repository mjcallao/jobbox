/*var express = require("express");
var mongoose = require('mongoose');

//Conexión a la bdd
// mongoose.connect('mongodb://127.0.0.1:27017?ext.ssh.server=desarrolloupe.sytes.net:16330&ext.ssh.username=grupo3&ext.ssh.password=desarrolloupe/jobbox', function(err, res) {
//   if(err) throw err;
//   console.log('Conectado con éxito a la BD');
// });



var app = express();

app.use(express.static("public"));


app.set("port",(process.env.PORT || 5600));
app.listen(app.get("port"),()=>{
    console.log("puerto: ",app.get("port"))
});
*/


var express = require("express");
var mongoose = require('mongoose');
var strServidorMongo = 'mongodb://upe:upe@ds125555.mlab.com:25555/trabajosya';


//Conexiones viejas
/*mongoose.connect('mongodb://127.0.0.1:27017?ext.ssh.server=desarrolloupe.sytes.net:16330&ext.ssh.username=grupo3&ext.ssh.password=desarrolloupe/jobbox', function(err, res) {
/*mongoose.connect('mongodb://piamond.sytes.net:27017/jobbox', function(err, res) {
  if(err) throw err;
console.log('Conectado con éxito a la BD con el STRING de CONEXIÓN: ' + strServidorMongo );
});*/



/*Comentado para pruebas de registro*/


/*mongoose.connect('mongodb://upe:upe@ds125555.mlab.com:25555/trabajosya', function(err, res) {
  if(err) throw err;
console.log('Conectado con éxito a la BD' );
});


var usuarioEsquema={
  email: String,
  password: String,
  name: String,
  lastName: String,
  cel: Number,
  tel: Number,
  locality: String,
  province: String,
  stateServices: Boolean,
  stateTools: Boolean,
  categories:{},
  tools:{}
}

var datosUsuario = {
  email: "upe@upe.edu.ar",
  password: "upe"
}

var Usuarios = mongoose.model(datosUsuario.email, usuarioEsquema);

Usuarios.findOne({"email":"upe@upe.edu.ar"}, "password", function(err, person){
  if (err) return handleError(err);
  if (person != null) {
    console.log("Ya existe");
  }else{
    var user = new Usuarios(datosUsuario);
    user.save(function(err){
    console.log(user);
    mongoose.disconnect();
  });
  }
})*/

/*


var user = new Usuarios(datosUsuario);


*/



/* 
user.save(function(err){
  console.log(user);
  mongoose.disconnect();
});

*/

/*HASTA ACA*/








/*

var categoriasEsquema = {
nombre: String,
estado: Boolean
};

var Categoria = mongoose.model("Categoria",categoriasEsquema);

var dataCategoria = {
	nombre: "Electricista",
	estado: false
}

var categ = new Categoria(dataCategoria);

categ.save(function(err){
	console.log(categ);
});
*/  
/*  ["Electricista",false],
  ["Gasista",false],
  ["Plomero",false],
  ["Instalador de aire acondicionado",false],
  ["Pintura",false],
  ["Electricista",false],
  ["Albañilería",false],
  ["Fletes",false],
  ["Limpieza de alfombras y tapizados",false],
  ["Armadores de muebles",false],
  ["service electrodomésticos",false],
  ["Decoraciones",false]*/






var app = express();

app.use(express.static("public"));


app.set("port",(process.env.PORT || 5600));
app.listen(app.get("port"),()=>{
    console.log("puerto: ",app.get("port"))
});