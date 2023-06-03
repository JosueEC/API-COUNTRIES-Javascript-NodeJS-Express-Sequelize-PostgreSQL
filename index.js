require('dotenv').config()
const server = require('./src/server')
const database = require('./config/database')

const { SERVER_PORT } = process.env

async function testDatabaseConnection () {
  try {
    await database.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

testDatabaseConnection()

server.listen(SERVER_PORT, () => {
  console.log(`server listening on port ${SERVER_PORT}`)
})
