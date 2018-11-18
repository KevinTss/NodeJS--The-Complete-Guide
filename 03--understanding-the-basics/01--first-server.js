// First basic node server

const http = require('http');

const server = http.createServer((req, res) => {
  // This function will be launch for each request done in the address of the server
  // is this case (in local) is when for example the browser go to `localhost:3000`
  console.log(req);
});

// When is launching
server.listen(3000);