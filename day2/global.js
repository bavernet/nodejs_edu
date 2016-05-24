
console.log(global);

x = 'this is global';
var x2 = 'this is global x2';

console.log('x2:' + x2);
console.log('global.x2:' + global.x2);

console.log(global.x);
console.log(x);
console.log(x === global.x);
console.log(__dirname);
console.log(__filename);

