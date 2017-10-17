
var https = require('https');

var url = "https://u6HsSO7H58krEHqMydGDyNx0VwIYsQOeZpYfZhnx:X@bibles.org/v2/versions.js";
https.get(url, function(res2) {
  console.log("Sent Passage to Bibles.org: " + res2.statusCode);

  var body = '';
  res2.on('data', function(chunk) {
    body += chunk;
  });
  res2.on('end', function() {
    versions = JSON.parse(body).response.versions;
    
    for(var i=0, j=versions.length;i<j; i++){
        if(versions[i].lang == "eng-US" || versions[i].lang == "eng-GB"){
            console.log(versions[i].id + ' ' + versions[i].lang + ' ' + versions[i].name);
        }
    }
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});