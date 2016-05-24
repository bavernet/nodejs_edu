var fs = require("fs");

fs.writeFile("./test2.txt", "this is test2", "utf-8", function(err) {
	if (err) {
		console.log("file write err.");
	} else {
		console.log("file write succeed.");
	}
});