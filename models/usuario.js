/**
 * New node file
 */

var mongoose = require('mongoose');
var UsuarioSchema = mongoose.Schema({
	nombre: {type: String, required: true},
	apellido: {type: String, required: true},
	oficios: {type: Array, required: true},
	direccion:{type: String, required:true},
	email:{type: String, required:true},
	otros:{type:String}
});

module.exports=UsuarioSchema