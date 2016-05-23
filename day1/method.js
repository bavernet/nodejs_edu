function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.PI = 3.14;
Person.prototype.sayHello = function() {
	console.log("sayHello() " + this.name + ": " + this.age);
};

var lee = new Person('lee', 27);
var bae = new Person('bae', 25);

lee.sayHello();
bae.sayHello();
console.log(lee);
console.log(bae);
console.log(bae.PI);
console.log(bae.hasOwnProperty('name'));
console.log(bae.hasOwnProperty('sayHello'));