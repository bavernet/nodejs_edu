var fs = require("fs");

fs.open("./test.txt", "w", function(err, fd) {
	if (err) {
		console.log("Error:", err);
	} else {
		fs.write(fd, "hello", "utf-8", function(err) {
			if (err) {
				console.log("Error:", err);
			} else {
				console.log("write() complete");
			}
		});
	} 
});