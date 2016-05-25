console.log("child runnig...");

process.on("message", function(msg) {
	for(var i = 0; i <= msg; ++i) {
		(function(v) {
			setTimeout(function() {
				process.send(v);
				//console.log(v);
				if (v === msg)
					process.exit(0);
			}, 100 * i);
		})(i);
	}
	console.log("end of loop");
});

//process.emit("message");
console.log("end of child codes");