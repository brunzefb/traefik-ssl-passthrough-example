var fs = require("fs");
var http = require("http");
var https = require("https");
var privateKey = fs.readFileSync("../ssl/server.key", "utf8");
var certificate = fs.readFileSync("../ssl/server.crt", "utf8");

var credentials = { key: privateKey, cert: certificate };
var express = require("express");
var app = express();

app.get("/helloworld", function(req, res) {
  res.send("Hello World\n");
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8888);
console.log("Running on http://:" + PORT);
