var http = require("http");
var express = require("express");
var socketio = require("socket.io");

var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/www/chat.html");
});

server.listen(9999, function() {
	console.log("socket.io server on 9999...");
});

var clients = [];
io.on("connection", function(ws) {
	console.log("connected." + ws);
	clients.push(ws);
	
	ws.on("login", function(data) {
		var nick = data.nick;
		io.emit("msg", { text : nick + " has connected." });
	});
	
	ws.on("logout", function(data) {
		var nick = data.nick;
		io.emit("msg", { text : nick + " was disconnected." });
	});
	
	ws.on("msg", function(data) {
		var nick = data.nick;
		var msg = data.text;
		io.emit("msg", { text : nick + ": " + msg });
	});
});