var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usuarioSchema = new Schema({  
  name:    { type: String },
  lastname:    { type: String },
  genre:    { type: String, enum: ['male', 'female'] },
  email:   { type: String }
  // password: { type: String }
  // stateServices: { type: Boolean },
  // stateTools: { type: Boolean }

});

module.exports = mongoose.model('Usuario', usuarioSchema);