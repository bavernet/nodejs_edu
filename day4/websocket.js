var WebSocketServer = require("websocket").server;
var http = require("http");
var express = require("express");

var app = express();

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/www/websocket.html");
});

var server = http.createServer(app);
var ws = new WebSocketServer({
	httpServer : server
});
ws.on("request", function(req) {
	var conn = req.accept(null, req.origin);
	conn.on("message", function(msg) {
		console.log("message:", msg);
		conn.send(msg.utf8Data);
	});
	conn.on("close", function() {
		console.log("connection closed");
	});
});

server.listen(9999, function() {
	console.log("ws server on 9999...");
});