var express = require("express");
var app = express();
var bodyParser =  require("body-parser");
// var mongoose = require("mongoose");
var User = require("./user").User;//la libreria y llamo al atributo User 

//var session =require("express-session");

// var Schema = mongoose.Schema;


// mongoose.connect('mongodb://localhost:27017/facultad', { useMongoClient: true })
// .then(() => {
//   console.log('connected');
// })
// .catch(console.error); LA CONEXION Y LOS SCHEMAS ESTAN EN USER.JS
// mongoose.connect("mongodb://localhost:27017/facultad")

// var userSchemaJSON = {
//     Nombre: String,
//     Pass:String
// }

// var user_schema = new Schema(userSchemaJSON);

// var User = mongoose.model("user", user_schema);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true})),

/*app.use(session({
    secret:"123byuhbsdah12ub",
    resave:false,//si se vualve a guardar o no cuando sufre un cambio,ej:dos usarios intentan acceder de manera paralela(concurrente) ambos lo modifican y uno ya tiene la session contaminada
    saveUninitialized:false//esto indica si la session deve guardarse aunqu la session no este inicializada
}))*/

app.set("port",(process.env.PORT || 5600));

app.post("/registration",(req,res)=>{
    var nombre = req.body.nombre;
    var userName = req.body.userName;
    var categories = [[true,"electricista"],[true,"plomero"]];
    var pass = req.body.pass;
    var password_c = req.body.password_c;
    var email = req.body.email;

    var user = new User ({
        name: nombre,
        userName: userName,
        categories: categories,
        password: pass,
        email: email,
        password_confirmation: password_c
    });


    // console.log(" usuario pass confirmation: ",user.password_confirmation)
    // console.log(" pass confirmation: ",password_c)

    user.save(function(err){//err se activa sdi las validaciones se cumplen, estan en user.js
        if(err){
            console.log(String(err));//imprime el objeto pero convertido encadena
        }
        res.send("Guardamos tus datos")
    }) //callback / pero ahora se usan promesas
    // user.save().then(function(us){//promesas con el metodo then, si no se cumplen las validaciones no se guarda en la bd
    //     res.send("Guardamos tus datos");
    // },function(err){
    //     if(err){
    //         console.log(String(err));
    //     }
    // })

    // console.log("name: ", req.body.nombre);
    // console.log("name: ", req.body.pass);
    // var user_schama = new Schema({
    //     nombre:"emiliasssno",
    //     apellido: "1233",
    //     dni:213
    // });
    // var user = mongoose.model("alumnos", user_schama);
    // user.save((req,res)=>{
    //     res.send("datos guardados")
    // })
    // res.end("enviado");

})
app.post("/session",function(req,res){
    User.findOne({email:req.body.email,password:req.body.pass},function(err,user){// este metodo encuentra uno documento(objeto)
        console.log(user);
        //req.session.user_id= user._id//se transforma en json
        res.send(user);//primer parametro -busqueda,segundo-filtro-tercero callback
    })
    // User.update({email:req.body.email},{password:req.body.pass},function(err,user){// este metodo encuentra uno documento(objeto)
    //     console.log(user);
    //     // req.session.user_id= user._id//se transforma en json
    //     res.send("dato actualizado");//primer parametro -busqueda,segundo-filtro-tercero callback
    // });
    // User.findById("59b66206e97f5011b8a71804",function(err,doc){// este metodo encuentra el objeto con ese ID
    //     console.log();
    //     res.send(doc);
    // })
    // User.find({email:req.body.email,password:req.body.pass},function(err,doc){// este metodo encuentra todos los documentos(objeto) que sea el email y pass que pasaste en array
    //     console.log(doc);
    //     res.send("Hola mundo");
    // })

})

app.post("/updateUser",function(req,res){
    User.update({email:req.body.email},{password:req.body.pass, name:  req.body.nombre,   userName: req.body.userName},function(err,user){// este metodo encuentra uno documento(objeto)
        console.log(user);
        // req.session.user_id= user._id//se transforma en json
        res.send("dato actualizado");//primer parametro -busqueda,segundo-filtro-tercero callback
    });
})
app.get("/singup",function(req,res){
    User.find(function(err,doc){
        console.log(doc);
        res.send("singup")
    })
    console.log("session guardada",req.session.user_id);
})
app.post("/login",function(req,res){
    res.send("login")
    console.log("session guardada",req.session.user_id);
})
app.get("/",function(req,res){
    console.log("session guardada",req.session.user_id);
    res.render(index)
})
app.listen(app.get("port"),()=>{
    console.log("puerto: ",app.get("port"))
})

