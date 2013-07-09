var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = fs.readFilSync('index.html');
var welcome = buffer.toString();

app.get('/', function(request, response) {
  response.send(welcome);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
