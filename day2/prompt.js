var readline = require('readline');

var r1 = readline.createInterface(process.stdin, process.stdout);
r1.setPrompt('type>');
r1.prompt();

r1.on('line', function(line) {
	if (line === 'exit') {
		r1.close();
	}
	console.log(line);
	r1.prompt();
});

r1.on('close', function() {
	process.exit();
});