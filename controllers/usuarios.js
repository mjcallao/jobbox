var mongoose = require('mongoose');
var Usuario  = mongoose.model('Usuario');

//GET - Return all registers
exports.findAll = function(req, res) {
	Usuario.find(function(err, usuarios) {
    if(err) res.send(500, err.message);
    	console.log('GET /usuarios')
		res.status(200).jsonp(usuarios);
	});
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
	Usuario.findById(req.params.id, function(err, usuario) {
    if(err) return res.send(500, err.message);
    console.log('GET /usuarios/' + req.params.id);
		res.status(200).jsonp(usuarios);
	});
};

//POST - Insert a new register
exports.add = function(req, res) {
	console.log('POST');
	console.log(req.body);
	var Usuario = new Usuario({
		name:    req.body.name,
		lastname:    req.body.name,
		genre:    req.body.genre,
		email: 	  req.body.email
		// password:  req.body.password
		// stateServices: req.body.stateServices,
		// stateTools: req.body.stateTools
	});

	usuario.save(function(err, usuario) {
		if(err) return res.send(500, err.message);
    	res.status(200).jsonp(usuario);
	});
};

//PUT - Update a register already exists
exports.update = function(req, res) {
	usuario.findById(req.params.id, function(err, usuario) {
		usuario.name   = req.body.name;
		usuario.lastname   = req.body.lastname;
		usuario.genre = req.body.genre;
		usuario.email    = req.body.email;
		// usuario.password = req.body.password;
		// usuario.stateServices = req.body.stateServices;
		// usuario.stateTools = req.body.stateTools;
		usuario.save(function(err) {
			if(err) return res.send(500, err.message);
      		res.status(200).jsonp(usuario);
		});
	});
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
	usuario.findById(req.params.id, function(err, usuario) {
		usuario.remove(function(err) {
			if(err) return res.send(500, err.message);
      		res.json({ message: 'Successfully deleted' });
		});
	});
};