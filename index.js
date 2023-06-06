require('dotenv').config()
const server = require('./src/server')
const { database } = require('./config/database')

const { SERVER_PORT } = process.env

// const { getAllCountries } = require('./src/services/API Flagpedia/getAllCountries.service')
// const { bulkCreateCountries } = require('./src/services/Database/bulkCreateCountries.service')

database.sync({ alter: true })
  .then(() => {
    server.listen(SERVER_PORT, () => {
      // await loadDatabase()
      console.log(`server listening on port ${SERVER_PORT}`)
    })
  })
  .catch((error) => {
    console.error(error.message)
  })

// async function loadDatabase () {
//   try {
//     const countries = await getAllCountries()
//     await bulkCreateCountries(countries)

//     console.info('database loaded')
//   } catch (error) {
//     return error.message
//   }
// }
