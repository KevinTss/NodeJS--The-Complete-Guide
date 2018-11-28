/**
 * Routing
 */

const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  // If we are on the main route put an form with a submit action to '/message'
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First response from nodejs</title></head>');
  res.write('<body><h1>Hello from nodeJS server !</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(7000);
