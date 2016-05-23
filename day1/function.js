
/*
if (1 == 1) {
	function f() {
		console.log("true");
	}
} else {
	function f() {
		console.log("false");
	}
}

f(); // it depends on browser and function f was overwritten by second definition
*/

if (1 == 0) {
	f = function() {
		console.log("true");
	}
} else {
	f = function() {
		console.log("false");
	}
}

f();