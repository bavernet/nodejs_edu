// first implementation using setInterval()
function first() {
	console.log("My first solution:");
	var cnt = 0;
	var id = setInterval(function() {
		console.log(cnt++);
		if (cnt > 100) {
			clearInterval(id);
		}
	}, 500);
}

// second implementation
function second() {
	console.log("My second solution:");
	function showCount(i) {
		console.log(i);
	}
	
	for (var i = 0; i <= 100; ++i) {
		setTimeout(showCount, 500 * i, i);
	}
}

// third implementation (teacher's solution)
function solution() {
	console.log("Teacher's solution:");
	for (var i = 0; i <= 100; ++i) {
		(function(cnt) {
			setTimeout(function(){
				console.log(cnt);
			}, 500 * cnt);
		})(i);
	}
}

f = first;
f();