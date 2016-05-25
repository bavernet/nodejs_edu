var http = require("http");
var server = http.createServer(function(request, response) {
	console.log("request: " + request.url + ", " + request.method);
	if (request.url === "/") {
		response.writeHead(200, {
			"Content-Type" : "text/html"
		});
		response.write("<h1>Welcome to My HTTP Server!!</h1>");
		response.end();
	} else {
		response.writeHead(404, {
			"Content-Type" : "text/html"
		});
		response.write("<h1>Not Found</h1>");
		response.end();
	}
});

/*
server.on("connection", function() {
	console.log("connection");
});
server.on("close", function() {
	console.log("close");
});
*/
/*
server.on("request", function(request, response) {
	console.log("request");
	console.log(arguments);
});
*/

server.on("error", function(err) {
	console.log("error ==> " + err);
});

server.listen(8081, function() {
	console.log("listening on 8081");
});