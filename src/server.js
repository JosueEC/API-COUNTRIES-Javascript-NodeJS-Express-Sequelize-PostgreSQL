const express = require('express')

const server = express()

server.use('/', (req, res) => {
  res.status(200).send('Hello World!')
})

module.exports = server
