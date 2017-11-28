var request = require("request");
var fs = require("fs");
var options = { method: 'GET',
  url: 'https://www.googleapis.com/customsearch/v1',
  qs: 
   { key: 'AIzaSyB-owg8TIX4gFA2EVU0M6NKleUvgfuOXFU',
     cx: '017576662512468239146:omuauf_lfve',
     q: 'bedrock data' },
  headers: 
   { 'postman-token': '78e4d8e0-e619-19b7-bd63-25d75037de5d',
     'cache-control': 'no-cache',
     q: 'bedrock' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

    fs.writeFile('message.txt', body.items, function(err)  {
      if(err) {
          return console.log(err);
          }
        // console.log('response', response)
        var parsed = JSON.parse(body)
        var items = parsed.items;
        items.forEach((item)=>{
          console.log('title:', item.title);
        })
        // console.log('items', items);
        // console.log("The file was saved!" + JSON.parse(body.items));
  })
});
