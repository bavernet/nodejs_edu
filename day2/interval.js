var cnt = 0;
var timerId = setInterval(()=>{
	++cnt;
	console.log('hello');
	if (cnt > 10)
		clearInterval(timerId);
}, 1000);
console.log(timerId);