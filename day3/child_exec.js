var child_process = require("child_process");

var cmd;
if (process.platform.match(/^win/)) {
	cmd = "dir";
} else {
	cmd = "ls";
}

child_process.exec(cmd, function(err, stdout, stderr) {
	if (err) {
		console.log("err: " + err.code);
	} else {
		if (stdout) {
			console.log(stdout);
		} else {
			console.log(stderr);
		}
	}
});