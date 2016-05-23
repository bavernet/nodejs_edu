function f() {
	console.log('hello');
}

f.age = 27;
f.prototype.name = 'Bae';

console.log(f.prototype + ": " + typeof(f.prototype));
console.log(f.age);
console.log(f.prototype.name);

var obj = new f();
console.log(obj);
console.log(obj.name);

var obj2 = new f();
console.log(obj2.name);