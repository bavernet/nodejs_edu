function something(a, b) {
	var r = a + b;
	process.nextTick(function() {
		console.log("log: %d + %d = %d", a, b, r);
	});
	return r;
}

var result = something(10, 20);
console.log("result: " + result);

var result = something(100, 120);
console.log("result: " + result);