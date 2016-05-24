console.time('abc');
for(var i = 0; i < 10; ++i) {
	console.log("count %d", i);
}
console.timeEnd('abc');