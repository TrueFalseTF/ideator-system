var express = require("express");
var app = express();

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log ("the server opened. the port: " + port);
});
