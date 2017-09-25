// Modelo Usuario para la base de datos

// Mongoose es una libreria de Node que nos permite
// conectarnos a una base de datos MongoDB y modelar un esquema
// para ella.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Campos que vamos a guardar en la base de datos
var ServiceSchema = new Schema({

	name: String, 										// Nombre del servicio
	provincia: String,									// Provincia en la que se ofrece
	localidad: String,									// Localidad en la que se ofrece
	score: Number,										// Score obtenido
	createdAt	 : {type: Date, default: Date.now} 		// Fecha de creación

});

// Exportamos el modelo 'Service' para usarlo en otras
// partes de la aplicación
var Service = mongoose.model('Service', UserSchema);
