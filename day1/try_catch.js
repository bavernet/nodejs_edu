function plus(a, b) {
	if (a > 0 && b > 0)
		return a + b;
	throw new Error("negative parameter unsupported");
}

try {
	var r = plus(-10, -20);
	console.log("result: " + r);
} catch(e) {
	console.log("error thrown: " + e);
} finally {
	console.log("done");
}