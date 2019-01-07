/**
 * Routing
*/

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('always run')
  next()
})

app.use('/add-product', (req, res, next) => {
  console.log('In the middleware')
  res.send('<form><input action="/product" method="POST" type="text" name="title"><button>Send</button></form>')
})

app.use('/product', (req, res, next) => {

  res.send('<h1>Add product</h1>')
})

app.use('/', (req, res, next) => {
  console.log('In another middleware')
  res.send('<h1>Home</h1>')
})

app.listen(3000);
