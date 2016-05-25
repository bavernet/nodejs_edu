var http = require("http");
var fs = require("fs");
var port = 8080;
var rootPath = "www";

http.createServer(function(request, response) {
	console.log("[SERVER] method: %s, url: %s", request.method, request.url);
	var url = (request.url === "/")? "/index.html" : request.url;
	var fout = fs.createReadStream(rootPath + url);
	response.writeHead(200, { "Content-Type" : "text/html" });
	fout.on("data", function(chunk) {
		var cont = response.write(chunk);
		if (!cont) {
			fout.pause();
			console.log("[SERVER] paused");
		}
	});
	fout.on("end", function() {
		response.end();
	});
	fout.on("error", function(e) {
		response.writeHead(404, { "Content-Type" : "text/html" });
		response.write("<h1>Not Found</h1>");
		response.end();
		console.log("[ERROR] " + e.message);
	});
	response.on("drain", function() {
		fout.resume();
		console.log("[SERVER] resumed");
	});
}).listen(port, function() {
	console.log("[SERVER] listening on %d", port);
});