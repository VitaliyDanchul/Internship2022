/**
 * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */


const fs = require("fs");
const axios = require("axios");

const request = (url, fileName) => {
  try {
    axios.get(url).then((response) => {
      fs.writeFile(fileName, JSON.stringify(response.data), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
  catch (error) {
    console.log(error);
  }
};

request("https://jsonplaceholder.typicode.com/users", "users.json");

/**
 * 2. Let's work with running node script with some environment variables
 * todo: Pass parameter ENV when you run this script.
 * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
 * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write if to file albums.json
 */

const env = process.env.ENV || "DEV";

if (env === "PRODUCTION") {
  request("https://jsonplaceholder.typicode.com/todos", "todos.json");
} else if (env === "DEV") {
  request("https://jsonplaceholder.typicode.com/albums", "albums.json");
} else {
  console.log("Wrong environment variable");
}
