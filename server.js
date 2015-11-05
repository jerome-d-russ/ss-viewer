var express = require('express');
var app = express();
var http = require('https');

app.use(express.static(__dirname));

var bookMenu;
app.get('/books', function (req, res) {
  if(bookMenu){
    console.log('Already cached!');
    console.log(bookMenu);
    res.json(JSON.stringify(bookMenu));
  } else {
    http.get("https://u6HsSO7H58krEHqMydGDyNx0VwIYsQOeZpYfZhnx:X@bibles.org/v2/versions/eng-NASB/books.js?include_chapters=true", function(res2) {
      console.log("Got response: " + res2.statusCode);
      
      var body = '';
      res2.on('data', function(chunk) {
        body += chunk;
      });
      res2.on('end', function() {
        bookMenu = {};
        var books = JSON.parse(body);
        console.log(books.response.books.length);
        for(var i=0;i<books.response.books.length;i++){
          var book = books.response.books[i];
          if(book.testament == 'OT' || book.testament == 'NT'){
            if(!bookMenu[book.testament]){
              bookMenu[book.testament] = {};
            }
            if(!bookMenu[book.testament][book.name]){
              bookMenu[book.testament][book.name] = {};
            }
            bookMenu[book.testament][book.name].order = book.ord;
            console.log(book.testament);
            console.log(book.name);
            console.log(book.chapters.length);
            for(var j=0;j<book.chapters.length;j++){
              var chapter = book.chapters[j];
              console.log(Number.isInteger(chapter.chapter) + " " + chapter.chapter);
              if(!isNaN(parseFloat(chapter.chapter)) && parseFloat(chapter.chapter) > 0){
                bookMenu[book.testament][book.name][chapter.chapter] = {};
                var end = chapter.osis_end.split('.');
                bookMenu[book.testament][book.name][chapter.chapter].length = end[end.length-1];                
              }
            }
          }
        }
        bookArray = [];
        console.log(JSON.stringify(bookMenu));
        for(var testament = 0;testament < Object.keys(bookMenu).length; testament++){
          //bookArray[testament].testament = Object.keys(bookMenu)[testament];
          for(var book = 0; book < Object.keys(testament).length; book++){
            //bookArray[testament][bok].name = Object.keys(testament)[book];
            //bookArray[testament][book][chapter].length = book;
            for(var chapter = 0; chapter < Object.keys(book).length; chapter++){
              bookArray[testament][book][chapter] = {};
              bookArray[testament][book][chapter].length = book.length;
            }
          }
        }
        res.json(bookArray);
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  }
});

app.use(function(req, res, next){
  res.redirect('/');
});

app.listen(process.env.PORT || 3000);