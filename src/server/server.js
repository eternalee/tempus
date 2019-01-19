const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send({ hello: 'there' })
})

app.listen(3000, () => 'Listening at http://localhost:3000')
