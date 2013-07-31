var http = require('http');
var express = require('express');
var fileserver = require('file-server');

var app = express();

app.use(express.static(__dirname + '/../build'));
app.use('/fileserver', fileserver(__dirname + '/files'));

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

http.createServer(app).listen(3000);
