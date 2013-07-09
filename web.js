#!/usr/bin/env node
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = fs.readFileSync('index.html');
var welcome = buffer.toString();
//console.log(welcome)
app.get('/', function(request, response) {
  response.send(welcome);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
