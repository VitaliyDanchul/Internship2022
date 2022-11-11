const http = require('http');

const server = require('./server');
const events = require('./events');

const PORT = server.get('port');

events.bind(http.createServer(server).listen(PORT));
