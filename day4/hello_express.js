var http = require("http");
var express = require("express");

var app = express();
app.get("/", function(req, res) {
	console.log("req: /");
	res.send("<h1> Welcome to my Express Server!!!!!!!!!!!!! </h1>");
});

app.get("/next", function(req, res) {
	console.log("req: /next");
	res.send("<h1> next page </h1>")
});

var server = http.createServer(app);
server.listen(8080, function() {
	console.log("server on 8080...");
});
