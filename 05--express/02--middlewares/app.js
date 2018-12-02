/**
 * Middleware
*/

// No need this line cause it's include in express
// const http = require('http');

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

// We can also replace the creation serve
// Express do it for us
// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
