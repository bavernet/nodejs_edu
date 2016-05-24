var calc = require("./calc.js");
console.log(calc);

var r = calc.plus(10, 20);
console.log(r);

r = calc.minus(20, 10);
console.log(r);

var module2 = require('mymodule.js');
module2.sayHello();

var module3 = require('mymodule3');
module3.sayHello();

var module4 = require('mymodule4');
var module41 = require('mymodule4');
var module42 = require('mymodule4');
module4.sayHello();
module41.sayHello();
module42.sayHello();
console.log("module4 === module41 ? " + (module4 === module41));

if (require.main === module) {
	console.log(__filename + " is main");
}

var mod_test = require('mytest');
console.log(mod_test);