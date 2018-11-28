/**
 * Get data from POST
 */

const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(7000);
