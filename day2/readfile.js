var fs = require("fs");

fs.readFile("./test2.txt", "utf-8", function(err, data) {
	if (err) {
		console.log("file read error.");
	} else {
		console.log("file:", data);
		console.log("type:", data.constructor.name);
	}
});