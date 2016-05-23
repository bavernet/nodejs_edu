/*
var member = new Object();
member.name = 'Bae';
member.age = 27;

var member2 = new Object();
member2.name = 'Han';
member2.age = 28;

var m = [member, member2];
*/

function Member(name, age) {
	this.name = name;
	this.age = age;
}

var m1 = new Member('Bae', 28);
var m2 = new Member('Han', 24);

var m = [m1, m2];

for (var i = 0; i < m.length; ++i) {
	console.log(m[i].name + ": " + m[i].age);
}