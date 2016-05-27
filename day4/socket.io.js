var http = require("http");
var express = require("express");
var socketio = require("socket.io");

var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/www/socketio.html");
});

server.listen(9999, function() {
	console.log("socket.io server on 9999...");
});

io.on("connection", function(socket) {
	socket.emit("anna", { "msg" : "Do you wanna build a snow man?" });
	socket.on("elsa", function(data) {
		console.log("recv: " + data.answer);
	});
});