const { country } = require('../../../../config/database')

const findAllCountries = async () => {
  const countries = await country.findAll()
  return countries
}

module.exports = { findAllCountries }
