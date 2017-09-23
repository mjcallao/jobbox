var express = require("express");
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017?ext.ssh.server=desarrolloupe.sytes.net:16330&ext.ssh.username=grupo3&ext.ssh.password=desarrolloupe/jobbox', function(err, res) {
  if(err) throw err;
  console.log('Conectado con éxito a la BD');
});



var app = express();

app.use(express.static("public"));

app.set("port",(process.env.PORT || 5600));

app.listen(app.get("port"),()=>{
    console.log("puerto: ",app.get("port"))
})