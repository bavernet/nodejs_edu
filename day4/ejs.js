var http = require("http");
var fs = require("fs");
var ejs = require("ejs");

var server = http.createServer(function(req, res) {
	fs.readFile("test.ejs.html", "utf-8", function(err, data) {
		if (err) {
			console.log("file err: " + err);
		} else {
			var html = ejs.render(data, { name: "Bae", age: 27 });
			console.log(html);
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(html);
		}
	});
});

server.listen(9090, function() {
	console.log("server on 9090...");
});