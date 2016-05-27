var http = require("http");
var socketio = require("socket.io");
var express = require("express");

var app = express();
var server = http.createServer(app);
var io = socketio(server);
var port = 9999;

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/drawing.html");
});

server.listen(port, function(err) {
	if (err) {
		console.log("[ERROR]", err);
	}
	console.log("Simple Drawing Server is on %d....", port);
});

io.on("connection", function(ws) {
	console.log("a user has connected.");
	
	ws.on("draw", function(data) {
		io.emit("draw", { px : data.px, py : data.py, x : data.x, y : data.y });
	});
});