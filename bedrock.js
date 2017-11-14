var request = require("request");
var fs = require("fs");
; var options = { method: 'GET',
  url: 'http://www.google.com',
  headers: 
   { 'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  
  fs.writeFile('message.txt', body, function(err)  {
    if(err) {
        return console.log(err);
        }

        console.log("The file was saved!");
  })
});

//take output of the request and put in body of file

