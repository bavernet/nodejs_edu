process.stdin.on("data", function(chunk) {
	process.stdout.write("You said, " + chunk);
});

process.on("SIGINT", function() {
	console.log("child: SIGINT");
	//process.exit(0);
});