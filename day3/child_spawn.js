var child_process = require("child_process");
var child = child_process.spawn("node", ["child_spawned.js"]);
child.stdin.write("Hello! this is parent.");
child.stdout.on("data", function(chunk) {
	console.log("From child: " + chunk);
	child.kill("SIGINT");
});

child.stderr.on("data", function(chunk) {
	console.log("From child(error): " + chunk);
});

child.on("exit", function(code) {
	console.log("Child was gone! :( ==> code: " + code);
});