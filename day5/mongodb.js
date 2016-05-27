var mongojs = require("mongojs");

var db = mongojs("localhost/test", ["board"]);
db.on("error", function(err) {
	console.log("db err: " + err);
});

db.on("connect", function() {
	console.log("connected.");
});

db.board.insert({_id: 4, title: "title4", content: "content4", writer: "xxx"});
db.board.insert({_id: 5, title: "title5", price: 30000, max: 300});

db.board.find(function(err, docs) {
	console.log(arguments);
	for (var i = 0; i < docs.length; ++i) {
		console.log(docs[i]._id + ",\t" +
					docs[i].title + ",\t" +
					docs[i].content + ",\t" +
					docs[i].writer);
	}
});