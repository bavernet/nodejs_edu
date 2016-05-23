function Super() {
	this.tt = 'Super';
}

Super.prototype.sayHello = function() {
	console.log('hello this is a super class');
}

function Sub() {
	this.age = 28;
}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

var sup = new Super();
sup.sayHello();

var sub = new Sub();
sub.sayHello();

console.log(sub instanceof Sub);
console.log(sub instanceof Super);
console.log(sub instanceof Object);
console.log(sub.constructor);
console.log(sup.constructor);
console.log(sub.tt);
