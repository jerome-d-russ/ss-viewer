var express = require('express');
var app = express();
var http = require('https');

app.use(express.static(__dirname));

app.get('/passage', function (req, res) {

  if(!req.query.edition || 
     !req.query.book || 
     !req.query.chapter || 
     !req.query.start || 
     !req.query.end) {
    res.statusCode = 400;
    return res.send('Error 400: Need Bible Edition, Book, Chapter, Start, and End.');
  } 

  var url = "https://u6HsSO7H58krEHqMydGDyNx0VwIYsQOeZpYfZhnx:X@bibles.org/v2/"
             + req.query.edition + "/passages.js?q[]=" 
             + req.query.book + "+" 
             + req.query.chapter + "%3A" 
             + req.query.start + "-" 
             + req.query.end;

  console.log(url);

  //https://bibles.org/v2/{{edition}}/passages.js?q[]={{book}}+{{chapter}}%3A{{start}}-{{stop}}
  http.get(url, function(res2) {
    console.log("Got response: " + res2.statusCode);
    
    var body = '';
    res2.on('data', function(chunk) {
      body += chunk;
    });
    res2.on('end', function() {
      var books = JSON.parse(body);
      res.json(books);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
});

app.use(function(req, res, next){
  res.redirect('/');
});

app.listen(process.env.PORT || 3000);