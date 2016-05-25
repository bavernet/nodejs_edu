var fs = require("fs");

var out = fs.createWriteStream("./out.txt");

process.stdin.setEncoding("utf-8");
process.stdin.pipe(out);

process.stdin.on('end', function() {
	out.close();
});

process.on('SIGINT', function() {
	out.close();
	process.exit(0);
});