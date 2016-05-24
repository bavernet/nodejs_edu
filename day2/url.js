var url = require('url');
var querystring = require('querystring');
var str = "http://www.google.com/search?q=nodejs&oq=url";
var obj = url.parse(str, true); // true means if querystring are parsed or not
console.log(obj);
console.log('--------------------------');
if (obj.query instanceof String) {
	var query = querystring.parse(obj.query);
	console.log(query);
} else {
	console.log('query is already parsed');
}