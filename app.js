var express = require("express");
var mongoose = require('mongoose');
var strServidorMongo = 'mongodb://piamond.sytes.net:27017/jobbox';


//Conexión a la bdd
//mongoose.connect('mongodb://127.0.0.1:27017?ext.ssh.server=desarrolloupe.sytes.net:16330&ext.ssh.username=grupo3&ext.ssh.password=desarrolloupe/jobbox', function(err, res) {
mongoose.connect('mongodb://piamond.sytes.net:27017/jobbox', function(err, res) {
  if(err) throw err;
console.log('Conectado con éxito a la BD con el STRING de CONEXIÓN: ' + strServidorMongo );
});


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
  
  // ["Electricista",false],
  // ["Gasista",false],
  // ["Plomero",false],
  // ["Instalador de aire acondicionado",false],
  // ["Pintura",false],
  // ["Electricista",false],
  // ["Albañilería",false],
  // ["Fletes",false],
  // ["Limpieza de alfombras y tapizados",false],
  // ["Armadores de muebles",false],
  // ["service electrodomésticos",false],
  // ["Decoraciones",false]






var app = express();

app.use(express.static("public"));


app.set("port",(process.env.PORT || 5600));
app.listen(app.get("port"),()=>{
    console.log("puerto: ",app.get("port"))
});