var fs = require("fs");

var out = fs.createWriteStream("./test4.txt");
for (var i = 0; i < 100; ++i) {
	out.write("Hello " + i + "!\n");
}
out.end("This is the end of file!");

out.on("finish", function() {
	console.log("All writes are done.");
});