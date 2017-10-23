var mongoose = require('mongoose');

module.exports = mongoose.model(
    'books',
    new mongoose.Schema({
        title: { type: String},
        ISBN: { type: String},
        author: { type: String }
    })
);
