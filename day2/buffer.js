var buff = new Buffer(1024);
var array = new Array(1024);

console.log(buff[12]);
console.log(array[12]);

buff[0] = 1;
buff[1] = 2;
buff[2] = 255;
buff[3] = 256;
for (var i = 0; i < buff.length; ++i) {
	console.log(buff[i]);
}

console.log("buff[2]", buff[2]);
console.log("buff[3]", buff[3]);

var buff2 = new Buffer("ABCDabcd한글", "utf-8");
console.log(buff2[0]);
console.log(buff2[1]);
console.log(buff2[2]);
console.log(buff2);
console.log(buff2.toString());

var buff3 = buff2.slice(4, 8);
buff2[4] = 67;
console.log(buff3.toString());

var buff4 = new Buffer(buff2.length);
buff2.copy(buff4, 0, 0, buff2.length);
console.log(buff4.toString());
console.log(buff4.constructor.name);
console.log(buff4.__proto__.__proto__.constructor.name);