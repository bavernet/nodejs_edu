var net = require("net");
var clients = [];

function broadcast(nick, msg) {
	clients.forEach(function(client, idx) {
		client.write(nick + ": " + msg);
	});
}

var server = net.createServer(function(client) {
	console.log("[SERVER] a client(%s) has connected.", client.remoteAddress);
	client.write("Welcome to My Server!\n");
	clients.push(client);
	
	process.stdin.on("data", function(data) {
		broadcast("SERVER", data);
	});
	
	client.on("data", function(chunk) {
		if (!client.hasOwnProperty("nickname")) {
			client.nickname = chunk;
			console.log("[SERVER] %s's nickname: %s", client.remoteAddress, chunk);
		} else {
			process.stdout.write(client.nickname + ": " + chunk);
			broadcast(client.nickname, chunk);
		}
	});
	
	client.on("end", function(){
		console.log("socket end");
	});
	client.on("close", function(){
		console.log("[SERVER] '%s' was out!", client.nickname);
		var idx = clients.indexOf(client);
		if (idx >= 0) {
			clients.splice(idx, 1);
		}
	});
	client.on("error", function(err){
		console.log("socket error" + client.remoteAddress + " --> " + err);
	});
});


server.on("close", function(){
	console.log("server closed");
});

server.on("error", function(error){
	console.log("error:" + error);
});

server.listen(9999, function() {
	console.log("[SERVER] server is listening on " + 9999);
});