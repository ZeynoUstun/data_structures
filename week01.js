var request = require('request');
var fs = require('fs');

//init i and j
var i = 1;
var j;


function doThings(){

  if (i < 10) {
      j = "0" + i;
  }
  else {
      j = "" + i;
  };

  var url = 'http://visualizedata.github.io/datastructures/data/m' + j + '.html';
  request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          fs.writeFileSync('./data/m' + j + '.txt', body);
          console.log('wrote file: /home/ubuntu/workspace/data/m' + j + '.txt');
          i++;

          if(i<=10){
            // call doThings() again only if the file already written.
            doThings();
          }
          if(i>10){
            return;
          }
      }
      else {console.error('request failed')}
  });

}
doThings() 
