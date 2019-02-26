const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

var app = express()
app.use(cors())
app.use(bodyParser.json())
var messages = []

app.get('/message', function (req, res) {
  res.status(201).send(messages)
})
app.post('/message', function (req, res) {
  try {
    let timeStamp = new Date()
    req.body.time = timeStamp.getTime()
    messages.push(req.body)
    res.status(201).send(req.body)
  } catch (err) {
    console.log("what&.")
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')

});
