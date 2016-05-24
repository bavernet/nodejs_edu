var crypto= require('crypto');

var content = "this is content";
var hash = crypto.createHash("sha1");
hash.update(content);

console.log(hash);

var output = hash.digest("base64");
console.log(output);