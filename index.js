require('dotenv').config()
const server = require('./src/server')
const { database } = require('./config/database')

const { SERVER_PORT } = process.env

// const { findAllCountries } = require('./src/entities/country/services/findAllCountries.service')
// const { getAllCountries } = require('./src/services/API Flagpedia/getAllCountries.service')
// const { bulkCreateCountries } = require('./src/services/Database/bulkCreateCountries.service')

database.sync({ alter: true })
  .then(() => {
    server.listen(SERVER_PORT || 3000, () => {
      // await loadDatabase()
      console.log(`server listening on port ${SERVER_PORT || 3000}`)
    })
  })
  .catch((error) => {
    console.error(error.message)
  })

// async function loadDatabase () {
//   try {
//     const countriesDatabase = await findAllCountries()

//     if (countriesDatabase.length === 0) {
//       const countries = await getAllCountries()
//       await bulkCreateCountries(countries)
//       console.info('database loaded')
//     } else {
//       console.info('the database is already loaded')
//     }
//   } catch (error) {
//     console.info(error.message)
//   }
// }
