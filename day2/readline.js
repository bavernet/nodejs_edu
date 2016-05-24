var readline = require('readline');
var r1 = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

r1.question('what your name? ', function(ans) {
	console.log('Hello Mr(s)', ans);
	r1.close();
});