var mysql = require("mysql");
var conn = mysql.createConnection({
	host :		"localhost",
	user :		"root",
	password :	"admin",
	database :	"test"
});

conn.connect(function(err) {
	if (err) {
		console.log("mysql connection error: " + err);
	}
});

conn.query("SELECT * FROM board", function(err, result, fields) {
	for (var i = 0; i < result.length; ++i) {
		console.log(result[i].id + ",\t" + 
					result[i].title + ",\t"	+ 
					result[i].content + ",\t" + 
					result[i].writer);
	}
});

var newid = 'zzz';
var oldid = 'bbb';
conn.query("UPDATE board SET writer=? WHERE writer=?", [newid, oldid], function(err) {
	console.log(arguments);
});

conn.query("DELETE FROM board WHERE writer=?", ["zzz"], function(err) {
	console.log(arguments);
});

conn.query("SELECT * FROM board", function(err, result, fields) {
	for (var i = 0; i < result.length; ++i) {
		console.log(result[i].id + ",\t" + 
					result[i].title + ",\t"	+ 
					result[i].content + ",\t" + 
					result[i].writer);
	}
});
