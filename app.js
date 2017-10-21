var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Connection to DB
mongoose.connect('mongodb://piamond.sytes.net/jobbox/clients', function(err, res) {
// mongoose.connect('mongodb://piamond.sytes.net/jobbox/usuarios', function(err, res) {
// mongoose.connect('mongodb://localhost/clients', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

// Import Models and Controllers
var models     = require('./models/client')(app, mongoose);
var modelsUsu     = require('./models/usuario')(app, mongoose);

var ClientCtrl = require('./controllers/clients');
var UsuarioCtrl = require('./controllers/usuarios');

var router = express.Router();

// Index - Route
router.get('/', function(req, res) {  
   res.send("Hola Mundo - www.programacion.com.py");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/usuarios')  
  .get(UsuarioCtrl.findAll)
  .post(UsuarioCtrl.add);

api.route('/usuarios/:id')  
  .get(UsuarioCtrl.findById)
  .put(UsuarioCtrl.update)
  .delete(UsuarioCtrl.delete);

api.route('/clients')  
  .get(ClientCtrl.findAll)
  .post(ClientCtrl.add);

api.route('/clients/:id')  
  .get(ClientCtrl.findById)
  .put(ClientCtrl.update)
  .delete(ClientCtrl.delete);

app.use('/api', api);  


// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});