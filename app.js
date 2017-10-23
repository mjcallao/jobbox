var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
require('./lib/db')(app);



app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

// bootstrap our routes
var routePath = __dirname + '/routes/';
fs.readdirSync(routePath).forEach(function (file) {
    require(routePath + file)(app);
});



var https = require('https');
 
var options = {
  key: fs.readFileSync('./certs/jobbox.key'),
  cert: fs.readFileSync('./certs/jobbox.crt')
};
 
https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("¡Responidiendo por SSL!\n");
}).listen(app.get('port'), function () {
console.log("https://localhost:" + app.get('port'));
});


// http.createServer(app).listen(app.get('port'), function () {
//     console.log("http://localhost:" + app.get('port'));
// });