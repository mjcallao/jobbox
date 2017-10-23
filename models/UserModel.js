var mongoose = require('mongoose');

module.exports = mongoose.model(
    'users',
    new mongoose.Schema({
        username: { type: String},
	    name:    { type: String },
	    lastname:    { type: String, require: true},
        password: { type: String},
		genre:    { type: String, enum: ['male', 'female'] },

        email: { type: String }
    })
);
