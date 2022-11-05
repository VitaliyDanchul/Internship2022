/**
 * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */

const https = require('https');
var fs = require('fs');

const apiCall = {
  apiLink: 'https://jsonplaceholder.typicode.com/users',
  fileName: 'users.json', 
}

if (process.env.ENV === "PRODUCTION") {
  apiCall.apiLink = 'https://jsonplaceholder.typicode.com/todos';
  apiCall.fileName = 'todos.json';    
}

if (process.env.ENV === "DEV") {
  apiCall.apiLink = 'https://jsonplaceholder.typicode.com/albums';
  apiCall.fileName = 'albums.json'; 
}

https.get(apiCall.apiLink, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    fs.appendFile(apiCall.fileName, data, function (err) {
      if (err) throw err;
      console.log('File was created succesfully!');
    });
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});


/**
 * 2. Let's work with running node script with some environment variables
 * todo: Pass parameter ENV when you run this script. 
 * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
 * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write it to file albums.json
 */
