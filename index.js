require('dotenv').config()
const server = require('./src/server')
const { database } = require('./config/database')

const { SERVER_PORT } = process.env

const { getAllCountries } = require('./src/services/API Flagpedia/getAllCountries.service')

database.sync({ alter: true })
  .then(() => {
    server.listen(SERVER_PORT, async () => {
      await loadDatabase()
      console.log(`server listening on port ${SERVER_PORT}`)
    })
  })
  .catch((error) => {
    console.error(error.message)
  })

async function loadDatabase () {
  try {
    await getAllCountries()
  } catch (error) {
    return error.message
  }
}
