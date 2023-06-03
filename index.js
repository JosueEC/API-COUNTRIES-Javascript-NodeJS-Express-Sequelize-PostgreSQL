const express = require('express')

const server = express()

server.use('/', (req, res) => {
  res.status(200).send({
    code: 200,
    data: 'Hello World'
  })
})

server.listen(3000, () => {
  console.log('server online on port 3000')
})
