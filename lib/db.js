/**
 * Loads db connection.
 * @param server
 */
module.exports = function (server) {
    var db = require('mongoose');
    db.connect("mongodb://localhost:27017/jobbox", function (err) {
        if (err) console.log(err);
    });
};


// // Conexión
// mongoose.connect('mongodb://localhost/jobbox', function(err, res) {
// // mongoose.connect('mongodb://desarrolloupe.sytes.net/jobbox', function(err, res) {
// 	if(err) {
// 		console.log('ERROR: connecting to Database. ' + err);
// 	} else {
// 		console.log('Connected to Database');
// 	}
// });
 