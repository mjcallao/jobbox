// Modelo Usuario para la base de datos

// Mongoose es una libreria de Node que nos permite
// conectarnos a una base de datos MongoDB y modelar un esquema
// para ella.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Campos que vamos a guardar en la base de datos
var UserSchema = new Schema({

	name: String, 								// Nombre del usuario
	lastName: String,							// Apellido del usuario
	email: String,								// Correo del usuario con el que se registró
	disponible: Boolean,						// Estado, disponible o no (True or False)
	photo: String,			 					// Avatar o foto del usuario
	createdAt	 : {type: Date, default: Date.now} // Fecha de creación

});

// Exportamos el modelo 'User' para usarlo en otras
// partes de la aplicación
var User = mongoose.model('User', UserSchema);
