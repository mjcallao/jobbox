var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("port",(process.env.PORT || 5600));

app.listen(app.get("port"),()=>{
    console.log("puerto: ",app.get("port"))
})