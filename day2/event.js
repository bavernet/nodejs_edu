// deplicated method
/*
var event = require("events");
var evt = new event.EventEmitter();
*/

// new method
/*
var EventEmitter = require("events");
var evt = new EventEmitter();

console.log(EventEmitter);
console.log(EventEmitter == EventEmitter.EventEmitter);
*/

var evt = new (require('events'))();

evt.on('custom', function(a) {
	console.log('custom event occurred:', a);
});
evt.addListener('custom', function(a) {
	console.log('custom event occurred:', a, 'double killed');
});

evt.emit('custom');
evt.emit('custom');
evt.emit('custom');
evt.emit('custom', 'hello');
evt.emit('custom', 10);