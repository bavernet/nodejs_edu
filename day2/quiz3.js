/*
 * 
 * > filename: afjdsklafsda
 * $ abcd ...
 * > def...
 * > .exit
 */

var fs = require("fs");
var stdin = process.stdin;
var fname;

process.stdout.write("> filename: ");
function readFilename(chunk) {
	fname = chunk.toString("utf-8").trim();
	stdin.removeAllListeners("data");
	console.log("read filename: " + fname);
	
	var out = fs.createWriteStream(fname);
	stdin.on("data", function(data) {
		if (data.toString().trim() !== ".exit") {
			out.write(data.toString());
			console.log("data", data.toString());
		} else {
			out.close();
			process.exit(0);
		}
	});
}

stdin.on("data", readFilename);


