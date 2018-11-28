const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    // We fire an event when a chunck with data will finish
    req.on('data', (chunk) => {
      console.log('chunck', chunk);
      // and put it in body array
      body.push(chunk);
    });
    // Second event on end
    req.on('end', () => {
      // where the 'bus' stop
      const parsedBody = Buffer.concat(body).toString();
      // get value of message ('name' of html fields)
      const message = parsedBody.split('=')[1];
      // create txt file with value
      fs.writeFileSync('message.txt', message);
    });
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

};

module.exports = requestHandler;
