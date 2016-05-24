var os = require('os');

console.log(os.cpus());
console.log(os.hostname());
console.log(os.type());
console.log(os.freemem() + '/' + os.totalmem());
console.log(os.networkInterfaces());