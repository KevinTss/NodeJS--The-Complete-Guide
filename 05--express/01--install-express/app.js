/**
 * Middleware
*/

const http = require('http');

const express = require('express');

const app = express();

// This function will be executed for each request to the server
app.use((req, res, next) => {
  console.log('In the middleware');
  // if you execute next, you allowed to passe to the next middleware and
  // continue the process
  next();
})
app.use((req, res, next) => {
  console.log('In another middleware');
})

const server = http.createServer(app);

server.listen(3000);
