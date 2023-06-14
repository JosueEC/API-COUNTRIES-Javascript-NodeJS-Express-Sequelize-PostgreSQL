const { country } = require('../../../../config/database')

const findAllCountryFlags = async () => {
  const countryFlags = await country.findAll({ attributes: ['id', 'name', 'image'] })

  if (countryFlags.length === 0) throw new Error('country flags not found')

  return countryFlags
}

module.exports = { findAllCountryFlags }
