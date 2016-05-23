f();
//console.log(y);
console.log(x);

var x = 10;

function f() {
	console.log("this is function f.");
}

var f2 = new Function("console.log('this is function f2');");
f2();

var f3 = function() {
	console.log("this is function f3");
}

f3();