require('dotenv').config();
const http = require('https');
const fs = require('fs');

function download(url, dest) {
    const file = fs.createWriteStream(dest);

    http.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close(() => {
                console.log(`downloaded to ${dest} no issues...`);
            });
        });
    }).on('error', (err) => {
        console.error('error while downloading', err);
    });
}

download('https://jsonplaceholder.typicode.com/users', 'users.json');

if (process.env.NODE_ENV === 'production') {
    download('https://jsonplaceholder.typicode.com/todos', 'todos.json');
}

if (process.env.NODE_ENV === 'dev') {
    download('https://jsonplaceholder.typicode.com/albums', 'albums.json');
}
