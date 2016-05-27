var express = require("express");
var morgan = require("morgan");

var logger = morgan("combined");
var app = express();

var router = express.Router();

app.use(logger);

router.get("/event", function(req, res) {
	res.send("<h1>test event</h1>");
});

app.use("/sub", router);

app.get("/plus.do", function(req, res) {
	var op1 = parseInt(req.params.op1);
	var op2 = parseInt(req.params.op2);
	var ans = op1 + op2;
	res.json({
		op1: op1,
		op2: op2,
		result: ans
	});
});

app.use(express.static(__dirname + "/www"));

app.listen(8080, function() {
	console.log("express server on 8080...");
});