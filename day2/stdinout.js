process.stdout.write("Hello Console.\n");
process.stdin.on("data", function(chunk) {
	console.log("chunk: " + chunk);
	process.stdin.pause();
});

process.stdin.on("readable", function() {
	console.log("readable: " + process.stdin.isPaused());
	if (process.stdin.isPaused()) {
		var chunk = process.stdin.read();
		if (chunk !== null) {
			console.log("data: " + chunk.toString());
			process.stdin.resume();
		}
	}
});

process.stdin.on("close", function() {
	console.log("close");
});

process.stdin.on("end", function() {
	console.log("end");
});