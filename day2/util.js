var util = require('util');

var data = util.format('%d + %d = %d', 12, 23, 12+23);
console.log(data);

function Super() {
	this.name = 'super';
}

Super.prototype.sayHello = function() {
	console.log('super: ' + this.name);
}

function Sub() {
	this.name = 'sub';
}

//Sub.prototype = new Super();
//Sub.constructor = Sub;

util.inherits(Sub, Super);

var sub = new Sub();
sub.sayHello();
console.log(sub instanceof Super);
console.log(sub.constructor.name);