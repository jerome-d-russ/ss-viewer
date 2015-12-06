var express = require('express');
var app = express();
var http = require('http').Server(app);
var https = require('https');
var io = require('socket.io')(http);
var bookMenu = require('./bookMenu');

io.on('connection', function(socket){
  socket.on('set viewer', function(msg){
    console.log('set viewer received: ' + msg)
    io.emit('change view', msg);
  });
  socket.on('set console', function(msg){
    console.log('change console received: ' + msg)
    io.emit('change console', msg);
  });
  console.log('a user connected');
});

app.use(express.static(__dirname));

app.get('/passage', function (req, res) {
  console.log("Recieved /passage");

  if(!req.query.edition || 
     !req.query.book || 
     !req.query.chapter) {
    res.statusCode = 400;
    return res.send('Error 400: Need Bible Edition, Book, Chapter.'); //, Start, and End.');
  } 

  var url = "https://u6HsSO7H58krEHqMydGDyNx0VwIYsQOeZpYfZhnx:X@bibles.org/v2/chapters/"
             + req.query.edition + ":" 
             + req.query.book + "."
             + req.query.chapter + ".js"

  console.log(url);

  //https://bibles.org/v2/{{edition}}/passages.js?q[]={{book}}+{{chapter}}%3A{{start}}-{{stop}}
  https.get(url, function(res2) {
    console.log("Sent Passage to Bibles.org: " + res2.statusCode);
    
    var body = '';
    res2.on('data', function(chunk) {
      body += chunk;
    });
    res2.on('end', function() {
      var passage = JSON.parse(body).response.chapters[0];
      console.log("Passage Sent");
      res.json(passage);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
});

app.get('/books', function(req, res){
  console.log("sending /books");
  res.json(bookMenu);
});

app.use(function(req, res, next){
  res.redirect('/');
});

var port = process.env.port || 3000;
var server = http.listen(port, function () {
  console.log("listening on port... " + port);
});