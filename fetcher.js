const message = process.argv.slice(2)
const URL = message[0];
const filePath = message[1]
const fs = require('fs')
const stats = fs.statSync(filePath)
let bytes = stats.size;

console.log(`Download complete! Saved ${stats.size} bytes to ${filePath}`);

const request = require('request');
request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

module.exports = { bytes }




// /** 
//  * SETUP
//  * Our usual client setup code
//  * Connect to example.edu website's HTTP server using our TCP library
//  * HTTP servers typically run on port 80
//  */
// const net = require('net');
// const conn = net.createConnection({
//   host: 'example.edu',
//   port: 80
// });
// conn.setEncoding('UTF8');


// conn.on('connect', () => {
//   console.log(`Connected to server!`);

//   conn.write(`GET / HTTP/1.1\r\n`);
//   conn.write(`Host: example.edu\r\n`);
//   conn.write(`\r\n`);
// });