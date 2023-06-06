const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.json())
server.use(morgan('dev'))

server.use('/', (req, res) => {
  res.status(200).send('Hello World!')
})

module.exports = server
