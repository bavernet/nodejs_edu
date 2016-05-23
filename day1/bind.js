function f(a, b) {
	console.log(this.name);
	console.log(this.age);
	console.log(a + " + " + b + " = " + (a + b));
}

var obj = {name: 'bae', age: 27};

f.call(obj, 1, 2);

var f2 = f.bind(obj, 2);
f2(7);