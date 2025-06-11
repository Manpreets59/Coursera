const express = require('express')
const app = express()

app.post('/user/signup', (req, res) => {
  res.send('Hello World!')
})

app.post('/user/signin', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/purchases', (req, res) => {
  res.send('Hello World!')
})

app.post('/courses/purchases', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.listen(3000);