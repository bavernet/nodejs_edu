function plus(a, b) {
	return a + b;
}

function minus(a, b) {
	return a - b;
}

exports.plus = plus;
module.exports.minus = minus;

console.log("module.exports === exports : " + (module.exports === exports));