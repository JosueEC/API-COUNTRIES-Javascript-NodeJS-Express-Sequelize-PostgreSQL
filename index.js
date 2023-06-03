require('dotenv').config()
const server = require('./src/server')

const { SERVER_PORT } = process.env

server.listen(SERVER_PORT, () => {
  console.log(`server listening on port ${SERVER_PORT}`)
})
