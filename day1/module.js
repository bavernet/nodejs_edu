var module = (function() {
	var count = 0;
	
	function play() {
		console.log(".....");
		increment();
	}
	
	function increment() {
		++count;
	}
	
	function getCount() {
		return count;
	}
	
	var module = new Object();
	module.play = play;
	module.getCount = getCount;
	return module;
})();

module.play();
module.play();
console.log(module.getCount());