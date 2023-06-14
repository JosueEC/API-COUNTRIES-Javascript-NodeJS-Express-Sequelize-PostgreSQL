const { country } = require('../../../../config/database')

const findAllCountryIDs = async () => {
  const countryIDs = await country.findAll({ attributes: ['id'] })

  if (countryIDs.length === 0) throw new Error('country IDs not found')

  return countryIDs
}

module.exports = { findAllCountryIDs }
