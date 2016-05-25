if (require.main === module) {
	if (process.argv.length !== 3) {
		console.log("usage: node netClient.js [nickname]");
		process.exit(1);
	}

	var net = require("net");
	var nick = process.argv[2];
	var socket = net.connect({ host : 'localhost', port : 9999 });

	process.stdin.on("data", function(chunk) {
		socket.write(chunk);
	});

	socket.on("connect", function() {
		console.log("connect succeed.");
		socket.write(nick);
	});
	socket.on("data", function(chunk) {
		process.stdout.write(chunk);
	});
	socket.on("close", function() {
		console.log("client socket closed");
		process.exit(1);
	});
	socket.on("end", function() {
		console.log("client socket ended");
	});
	socket.on("error", function(error) {
		console.log("client error: " + error);
	});
}