var net = require("net");
var readline = require("readline");

var server = net.createServer(function(client) {
	console.log(client.remoteAddress + " was connected");
	var rl = readline.createInterface({ input: client });
	var isFirst = true;
	rl.on("line", function(line) {
		console.log(line);
		if (isFirst) {
			var req = line.split(" ");
			if (req[0] === "GET") {
				if (req[1] === "/") {
					client.write("HTTP/1.1 200 OK\r\n");
					client.write("Content-Type: text/html\r\n");
					client.write("\r\n");
					client.write("<html><body><h1>Welcome to My Server</h1></body></html>");
					client.end();
				} else {
					client.write("HTTP/1.1 404 NOT FOUND\r\n");
					client.write("Content-Type: text/html\r\n");
					client.write("\r\n");
					client.write("<html><body><h1><font color=\"red\">Not Found</font></h1></body></html>");
					client.end();
				}
			}
		}
	});
});

server.on("close", function() {});
server.on("error", function() {});

server.listen(8080, function() {
	console.log("server on 8080");
});