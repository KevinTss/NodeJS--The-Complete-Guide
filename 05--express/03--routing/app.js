/**
 * Routing
*/

const express = require('express');

const app = express();

// Put the route in ordre
// remember that for each request we pass through each middleware et if we send, we stop
// If we put the '/' first, we always pass on it
app.use('/add-product', (req, res, next) => {
  console.log('In the middleware')
  res.send('<h1>Add product</h1>')
})

app.use('/', (req, res, next) => {
  console.log('In another middleware')
  res.send('<h1>Home</h1>')
})

app.listen(3000);
