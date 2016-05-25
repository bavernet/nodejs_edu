var child = require("child_process");

child.execFile("node", ["--version"], function(err, stdout, stderr) {
	if (err) {
		console.log("err: " + err.code);
	} else {
		console.log(stdout);
	}
});