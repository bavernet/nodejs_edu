var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");

var users = [ { id : "aaa", pwd : "aaa" }, { id : "bbb", pwd : "bbb" }];

var app = express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use(session( { secret : "session-key" }));

app.get("/", function(req, res) {
	res.redirect("/login.html");
});

app.post("/login.do", function(req, res) {
	var id = req.param("id");
	var pwd = req.param("pwd");
	
	console.log(id + ": " + pwd);
	users.some(function(user, idx) {
		if (user.id === id && user.pwd === pwd) {
			console.log("OK");
			req.session.user = user;
			res.redirect("/logined.html");
			return true;
		}
	});
});

app.get("/logined.html", function(req, res) {
	console.log("/logined.html --> ");
	console.log(req.session);
	if (req.session.user) {
		res.sendFile(__dirname + "/www/logined.html");
	} else {
		res.redirect("/login.html");
	}
});

app.get("/logout.do", function(req, res) {
	req.session.destroy(function(err) {
		console.log("session error.");
	});
	res.redirect("/login.html");
});

app.use(express.static(__dirname + "/www"));

app.listen(9999, function() {
	console.log("session server on 9999....");
});