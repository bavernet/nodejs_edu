function Person(name, age) {
	this.name = name;
	var _age = age;
	
	Object.defineProperty(this, 'age', {
		set : function(val) {
			console.log("setter: " + val);
			if (val > 0)
				_age = val;
		},
		get : function() {
			return _age;
		},
	});
}

Person.prototype.sayHello = function() {
	console.log(this.name + ": " + this.age);
}

var lee = new Person('lee', 27);
lee.sayHello();

lee.age = -23;
lee.sayHello();