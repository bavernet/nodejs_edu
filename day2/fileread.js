var fs = require("fs");
var buff = new Buffer(1024);

fs.open("./test.txt", "r", function(err, fd) {
	if (err) {
		console.log("Error:", err);
	} else {
		fs.read(fd, buff, 0, buff.length, 1, function(err, bytes, chunk) {
			console.log("read:", chunk.toString("utf-8", 0, bytes));
			console.log("type:", chunk.constructor.name);
			fs.close(fd);
		});
	}
});
