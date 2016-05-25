var http = require("http");
var fs = require("fs");
var path = require("path");
var urlm = require("url");
var port = 8080;
var rootPath = "www";

http.createServer(function(request, response) {
	console.log("[SERVER] method: %s, url: %s", request.method, request.url);
	var parsed = urlm.parse(request.url, true); 
	var url = (parsed.pathname === "/")? "/index.html" : parsed.pathname;

	if (url.match(/^\/search/)) {
		response.writeHead(302, { "Location" : "http://www.google.com" });
		response.end();
	} else if (url === "/plus") {
		var q = parsed.query;
		var result = parseInt(q.op1) + parseInt(q.op2);
		console.log("%s + %s = %d", q.op1, q.op2, result);
		response.writeHead(200, { "Content-Type" : "text/html" });
		response.write(result.toString());
		response.end();
	} else {
		var fout = fs.createReadStream(rootPath + url);
		fout.on("open", function(fd) {
			var mime = "text/html";
			if (path.extname(url) === ".jpg") {
				mime = 'image/jpeg';
			} else if(path.extname(url) === ".gif") {
				mime = 'image/gif';
			}
			response.writeHead(200, { "Content-Type" : mime });
		});
		fout.on("data", function(chunk) {
			var cont = response.write(chunk);
			if (!cont) {
				fout.pause();
				//console.log("[SERVER] paused");
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
			//console.log("[SERVER] resumed");
		});
	}
}).listen(port, function() {
	console.log("[SERVER] listening on %d", port);
});