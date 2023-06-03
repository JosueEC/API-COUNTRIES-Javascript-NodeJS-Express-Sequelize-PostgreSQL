require('dotenv').config()
const server = require('./src/server')
const database = require('./config/database')

const { SERVER_PORT } = process.env

database.sync({ alter: true })
  .then(() => {
    server.listen(SERVER_PORT, () => {
      console.log(`server listening on port ${SERVER_PORT}`)
    })
  })
  .catch((error) => {
    console.error(error.message)
  })
