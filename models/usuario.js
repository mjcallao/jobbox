var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Images = new Schema({
    kind: {
        type: String,
        enum: ['thumbnail', 'detail'],
        required: true
    },
    url: { type: String, required: true }
});

var Usuario = new Schema({
    name:    { type: String },
  lastname:    { type: String, require: true},
  genre:    { type: String, enum: ['male', 'female'] },
  email:   { type: String, require: true}
});

// Usuario.path('model').validate(function (v) {
//     return ((v != "") && (v != null));
// });

module.exports = mongoose.model('Usuario', Usuario);

// .............................................................................
