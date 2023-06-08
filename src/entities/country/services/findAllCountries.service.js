const { country } = require('../../../../config/database')

const findAllCountries = async () => {
  const countries = await country.findAll()

  if (countries.length === 0) throw new Error('countries not found')

  return countries
}

module.exports = { findAllCountries }
