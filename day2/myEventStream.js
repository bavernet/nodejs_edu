var EventEmitter = require('events');
var util = require('util');

function MyStream() {
	EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
	console.log("write:", data);
	this.emit("data", data);
};

var stream = new MyStream();
stream.on("data", function(data) {
	console.log("recv:", data);
});

stream.write("Hello World");