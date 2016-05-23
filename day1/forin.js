var obj = new Object();
obj.name = "Bae";
obj.age = 27;

if ('name' in obj) {
	console.log(obj['name']);
}

for (var key in obj) {
	console.log(key + ": " + obj[key]);
}

var arr = [ 1, 2, 3, 4 ];
arr.name = "Kim's Array";

// 문제가 발생할 소지가 많다. 왜냐면 프로퍼티를 모두 가져오기 때문이다.
for (var idx in arr) {
	console.log(idx + ": " + arr[idx]);
}

arr.forEach(function(v, i) {
	console.log(i + ": " + v);
});
