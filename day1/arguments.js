function f(a, b) {
	if (arguments.length !== f.length) {
		throw new Error("wrong number of arguments");
	}
	console.log("length: " + arguments.length);
	console.log(arguments);
}

f("one", "two");
f(1, 2, 3);

console.log("The number of arguments: " + f.length);