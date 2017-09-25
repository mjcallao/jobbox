// Modelo Usuario para la base de datos

// Mongoose es una libreria de Node que nos permite
// conectarnos a una base de datos MongoDB y modelar un esquema
// para ella.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Campos que vamos a guardar en la base de datos
var CommentSchema = new Schema({

	user: String, 										// Nombre del servicio
	message: String,									// Localidad en la que se ofrece
	createdAt	 : {type: Date, default: Date.now} 		// Fecha de creación

});

// Exportamos el modelo 'Comment' para usarlo en otras
// partes de la aplicación
var Comment = mongoose.model('Comment', UserSchema);
