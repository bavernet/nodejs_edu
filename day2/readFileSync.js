var fs = require("fs");

try {
	var content = fs.readFileSync("./test5.txt", "utf-8");
	console.log("read:", content);
} catch(e) {
	if (e.code == Error.ENOENT)
		console.log("error");
	console.log(e.code + ":==> " + e.message);
}