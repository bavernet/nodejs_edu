var obj = new Object();
obj.name = 'lee';

var obj2 = new Object();
Object.defineProperty(obj2, 'name', {value: 'kim', writable: true, configurable: true, enumerable: true});

console.log(obj2.name);
obj2.name = 'park';
console.log(obj2.name);
//delete obj2.name;
console.log(obj2.name);

console.log(obj2);


var obj3 = new Object();
Object.defineProperty(obj3, 'age', {
	//var x = 0;
	set : function(val) {
		console.log("setter: " + val);
		x = val;
	},
	get : function() {
		return x;
	},
});

obj3.age = 23;
console.log(obj3.age);
console.log(obj3);