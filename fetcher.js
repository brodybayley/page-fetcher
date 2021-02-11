const message = process.argv.slice(2)
const URL = message[0];
const filePath = message[1]
const http = require('http');
const fs = require('fs')
const stats = fs.statSync(filePath)
let bytes = stats.size;

console.log(`Download complete! Saved ${stats.size} bytes to ${filePath}`);

const request = require('request');
request(URL, (request) => {
  console.log('bytes:', stats); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});

// request(URL, ())
//         request.head(URL, (err, res, body) => {
//         console.log('content-type:', res.headers['content-type']);
//         console.log('content-length:', res.headers['content-length']);

//         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
//     });
// };

// module.exports = { download };