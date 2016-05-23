function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayHello = function() {
	console.log(this.name + ": " + this.age);
}

var lee = new Person('lee', 27);
lee.sayHello();

function Apple(name, age) {
	this.name = name;
	this.age = age;
}

var busa = new Apple('busa', 50);
Person.prototype.sayHello.call(busa);


function f(i, j) {
	console.log('hello');
	console.log(arguments);
}

f(1, 2);
f.call(null, 2, 3);
var arr = [ 3, 4 ];
f.apply(null, arr);