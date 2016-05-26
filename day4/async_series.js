var async = require("async");

async.series([ function(callback) {
	console.log("1st callback");
	setTimeout(function() {
		console.log("1st time");
		callback(null, "one");
	}, 2000);
}, function(callback) {
	console.log("2nd callback");
	setTimeout(function() {
		console.log("2nd time");
		callback(null, "two");
	}, 100);
}, function(callback) {
	console.log("3rd callback");
	callback(null, "three");
} ], function(err, results) {
	console.log('last callback');
	console.log(arguments);
});
