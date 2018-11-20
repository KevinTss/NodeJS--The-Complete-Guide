/**
 * Routing
 * 
 * fs doc : https://nodejs.org/api/fs.html
 */

const http = require('http');
// need new package to handle File System
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  // Test the second request from the form submit
  if (url === '/message' && method === 'POST') {
    // we want to write text inside new file
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
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
