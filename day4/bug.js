var a = 0;

function init(){
	a =1;
}

function increment(){
	debugger;
	var a = a + 1;
}

init();
console.log('init a:' + a);

increment();
console.log('last a:' + a);