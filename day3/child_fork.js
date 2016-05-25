var child_process = require("child_process");
var child = child_process.fork("./child_forked.js");
child.on("message", function(msg) {
	console.log("From child: " + msg);
});

child.send(10);
child.on("exit", function(code) {
	console.log("child terminated.");
	process.exit(0);
});