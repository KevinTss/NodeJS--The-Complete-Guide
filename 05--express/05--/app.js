/**
 * Body Parser
*/

const express = require('express');
// npm new package : body-parser
const bodyParser = require('body-parser')

const app = express();

// use the middleware to parse the request url
app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Send</button></form>')
})

app.use('/product', (req, res, next) => {
  // we can use now req.body, new key able via bodyparser
  console.log(req.body)
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  res.send('<h1>Home</h1>')
})

app.listen(3000);
