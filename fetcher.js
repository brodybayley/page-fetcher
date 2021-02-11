const message = process.argv.slice(2)
const URL = message[0];
const filePath = message[1]
const http = require('http');
const fs = require('fs')
const stats = fs.statSync(filePath)
let bytes = stats.size;


const request = require('request');
request(URL, (error, response, body) => {
  fs.writeFile(filePath, body, (error) => {
    console.log(`Download complete! Saved ${body.length} bytes to ${filePath}`)
  });
});


// module.exports = { download };