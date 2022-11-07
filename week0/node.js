/**
 * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */

const https = require('https');
const fs = require('fs');

function getConfig(envVar) {
  if (!envVar) {
    return {
      apiLink: 'https://jsonplaceholder.typicode.com/users',
      fileName: 'users.json', 
    }
  }

  const config = {
    PRODUCTION: {
      apiLink: 'https://jsonplaceholder.typicode.com/todos',
      fileName: 'todos.json',
    },
    DEV: {
      apiLink: 'https://jsonplaceholder.typicode.com/albums',
      fileName: 'albums.json',      
    }
  }

  return config[envVar];
}

https.get(getConfig(process.env.NODE_ENV).apiLink, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  let fileName = getConfig(process.env.NODE_ENV).fileName;

  resp.on('end', () => {
    fs.appendFile(fileName, data, function (err) {
      if (err) throw err;
      console.log(`File ${fileName} was created succesfully!`);
    });
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});


/**
 * 2. Let's work with running node script with some environment variables
 * todo: Pass parameter ENV when you run this script. 
 * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
 * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write it to file albums.json
 */
