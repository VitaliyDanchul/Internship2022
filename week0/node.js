/**
 * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */

const https = require('https');
const fs = require('fs');

let apiCall = {
  apiLink: 'https://jsonplaceholder.typicode.com/users',
  fileName: 'users.json', 
}

function getConfig(envVar) {
  if (envVar === 'PRODUCTION') {
    return {
      apiLink: 'https://jsonplaceholder.typicode.com/todos',
      fileName: 'todos.json',
    };
  }
  
  return {
    apiLink: 'https://jsonplaceholder.typicode.com/albums',
    fileName: 'albums.json',
  };
}

apiCall = process.env.NODE_ENV ? getConfig(process.env.NODE_ENV) : apiCall;

https.get(apiCall.apiLink, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    fs.appendFile(apiCall.fileName, data, function (err) {
      if (err) throw err;
      console.log(`File ${apiCall.fileName} was created succesfully!`);
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
