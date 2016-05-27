var addon = require('./build/Release/hello' );


// reference: https://v8docs.nodesource.com/node-4.2/

console.log(addon.prop);
console.log(addon.method());
console.log("addon.add(10, 20) = " + addon.add(10, 20));
addon.callback(function(msg){
    console.log(msg);
});

var obj = addon.createObject("hello node" );
console.log(obj);

var fn = addon.createFunction();
console.log(fn.name + " : " + fn ());

var obj = new addon.MyObject(10);
console.log(obj.plusOne());
console.log(obj.plusOne());