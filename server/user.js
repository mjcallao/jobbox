var mongoose = require("mongoose");
var Schema = mongoose.Schema;




// var MongoClient = require('mongodb').MongoClient;
// //var url = "mongodb://localhost:27017/mydb";
// var url = "mongodb://127.0.0.1:27017?ext.ssh.server=desarrolloupe.sytes.net:16330&ext.ssh.username=grupo3&ext.ssh.password=desarrolloupe";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   //Create a collection name "customers":
//   db.createCollection("User", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });



//mongoose.Promise = global.Promise; 
//mongoose.Promise = require('bluebird'); 
//mongoose.Promise = require('q').Promise;

//mongoose.Promise = global.Promise;
//mongoose.Promise = require('bluebird');
//mongoose.connect(db.mongodb.uri, db.mongodb.options);// mongoose.connect("mongodb://localhost:27017/facultad");
mongoose.connect("mongodb://127.0.0.1?ext.ssh.server=desarrolloupe.sytes.net:16330&ext.ssh.username=grupo3&ext.ssh.password=desarrolloupe");
//mongoose.connect("mongodb://Insfran:emiliano123%@ds135624.mlab.com:35624/jobbox");
//mongoose.createConnection("mongodb://Insfran:emiliano123%@ds135624.mlab.com:35624/jobbox");


var posibles_valores =["m","f"];
var email_match =[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"pasar un email valido"];
var password_validation={
            validator:function(p){
                return this.password_confirmation == p;
            },
            message:"las contraseñas no son iguales"
        }
var user_schema = new Schema({
    name:String,
    lasName:String,
    categories:Array,
    userName:{type:String,required:"Nombre de usuario obligatorio",maxlength:[50,"maximo 50 caracteres"]},
    password:
    {
        type:String,
        minlength:[3,"tiene que tener como minimo 3 caracteres"],
        validate:password_validation
        
    },
    age:{type:Number,min:[18,"tienes que teenr 18 años"],max:[100,"maximo 100 años"]},
    email:{type:String,required:"email obligatorio",match:email_match},
    date_of_birdth:Date,
    sex:{type:String,enum:{values:posibles_valores,message:"Opción no valida"}}

})


user_schema.virtual("password_confirmation").get(function(){//leee
    return this.p_c ;
}).set(function(password){//escribe
    this.p_c = password;
})
// user_schema.virtual("full_name").get(function(){//leee OTRO EEJEMPLO
//     return this.name + this.lasName ;
// }).set(function(full_name){//escribe
//     var words = full_name.split(" ");
//     this.name = words[0];
//     this.lastLame = words[1];
// })


var User = mongoose.model("User",user_schema);
module.exports.User = User;//se puede esportar funciones , objetos, en este caso exportamos el atributo user