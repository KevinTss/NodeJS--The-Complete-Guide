// First basic node server with response

const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First response from nodejs</title></head>');
  res.write('<body><h1>Hello from nodeJS server !</h1></body>');
  res.write('</html>');
  // Have to end the response write, at this moment we send to client so
  // it's impossible to wrtie after that.
  res.end();
});

server.listen(3000);