const message = process.argv.slice(2);
const URL = message[0];
const filePath = message[1];
const fs = require('fs');


const request = require('request');
request(URL, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }
  fs.writeFile(filePath, body, function(error) {
    if (error) {
      console.log('error:', error);
      return;
    }
    let data = body.length;
    console.log(`Download complete! Saved ${data} bytes to ${filePath}`);
  });
});

