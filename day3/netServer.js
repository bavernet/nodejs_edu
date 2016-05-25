var net = require("net");
function listening() {
	console.log("server is listening on " + 9999);
}

function connection(socket) {
	console.log("client has connected with " + socket.remoteAddress);
	
	socket.write("Welcome to My Server!\n");
	
	process.stdin.on("data", function(data) {
		socket.write(data);
	});
	
	socket.on("data", function(chunk) {
		console.log("recv: " + chunk);
	});
	socket.on("end", function(){
		console.log("socket end");
	});
	socket.on("close", function(){
		console.log("socket close");
	});
	socket.on("error", function(){
		console.log("socket error" + socket.remoteAddress);
	});
}

/* First implementation (Basic)
var server = net.createServer();

server.on("listening", listening);
server.on("connection", connection);
server.on("close", function(){
	console.log("server closed");
});
server.on("error", function(error){
	console.log("error:" + error);
});

server.listen(9999);
*/

/* second implementation (widely used) */
var server = net.createServer(connection);

server.on("close", function(){
	console.log("server closed");
});
server.on("error", function(error){
	console.log("error:" + error);
});

server.listen(9999, listening);