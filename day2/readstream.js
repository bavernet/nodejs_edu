var fs = require("fs");

var cnt = 0;
var read = fs.createReadStream("./testlong.txt");
read.on("data", function(chunk) {
	console.log("read: " + chunk.toString());
	console.log("----------------------------------------------------------------");
	console.log("cnt: ", ++cnt);
});
read.on("end", function() {
	read.close();
	console.log("done!!!!!!!!!");
});