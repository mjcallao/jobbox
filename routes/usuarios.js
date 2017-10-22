module.exports = function(app) {

  var Usuario = require('../models/usuario.js');

  //GET - Return all usuarios in the DB
  findAllUsuarios = function(req, res) {
    console.log("GET - /usuarios");
  	return Usuario.find(function(err, usuarios) {
  		if(!err) {
  			return res.send(usuarios);
  		} else {
        res.statusCode = 500;
  			console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
  		}
  	});
  };

  //GET - Return a Usuario with specified ID
  findById = function(req, res) {
    console.log("GET - /usuario/:id");
    return Usuario.findById(req.params.id, function(err, usuario) {
      if(!usuario) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }
      if(!err) {
        // Send { status:OK, usuario { usuario values }}
        return res.send({ status: 'OK', usuario:usuario });
        // Send {usuario values}
        // return res.send(usuario);
      } else {
        res.statusCode = 500;
        console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };

  //POST - Insert a new Usuario in the DB
  addUsuario = function(req, res) {
    console.log('POST - /usuario');
    console.log(req.body);

    var usuario = new Usuario({
		name:    req.body.name,
		lastname:    req.body.name,
		genre:    req.body.genre,
		email: 	  req.body.email
    });

    usuario.save(function(err) {
      if(!err) {
        console.log("Usuario created");
        return res.send({ status: 'OK', usuario:usuario });
      } else {
        console.log(err);
        if(err.name == 'ValidationError') {
          res.statusCode = 400;
          res.send({ error: 'Validation error' });
        } else {
          res.statusCode = 500;
          res.send({ error: 'Server error' });
        }
        console.log('Internal error(%d): %s',res.statusCode,err.message);
      }
    });
  };

  //PUT - Update a register already exists
  updateUsuario = function(req, res) {
    console.log("PUT - /usuario/:id");
    console.log(req.body);
    return Usuario.findById(req.params.id, function(err, usuario) {
      if(!usuario) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

   		if (req.body.name!= null) usuario.name = req.body.name;
		if (req.body.lastname != null) usuario.lastname = req.body.lastname;
		if (req.body.genre != null) usuario.genre = req.body.genre;
		if (req.body.email != null) usuario.email = req.body.email;
 

      // if (req.body.model != null) usuario.model = req.body.model;
      // if (req.body.price != null) usuario.price = req.body.price;
      // if (req.body.images != null) usuario.images = req.body.images; 
      // if (req.body.style != null) usuario.style = req.body.style;
      // if (req.body.size != null) usuario.size  = req.body.size;
      // if (req.body.colour != null) usuario.colour = req.body.colour;
      // if (req.body.summary != null) usuario.summary = req.body.summary;

      return usuario.save(function(err) {
        if(!err) {
          console.log('Updated');
          return res.send({ status: 'OK', usuario:usuario });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
          }
          console.log('Internal error(%d): %s',res.statusCode,err.message);
        }
      });
    });
  }

  //DELETE - Delete a Usuario with specified ID
  deleteUsuario = function(req, res) {
    console.log("DELETE - /usuario/:id");
    return Usuario.findById(req.params.id, function(err, usuario) {
      if(!usuario) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      return usuario.remove(function(err) {
        if(!err) {
          console.log('Removed usuario');
          return res.send({ status: 'OK' });
        } else {
          res.statusCode = 500;
          console.log('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
        }
      })
    });
  }

  //Link routes and functions
  app.get('/usuarios', findAllUsuarios);
  app.get('/usuario/:id', findById);
  app.post('/usuario', addUsuario);
  app.put('/usuario/:id', updateUsuario);
  app.delete('/usuario/:id', deleteUsuario);

}