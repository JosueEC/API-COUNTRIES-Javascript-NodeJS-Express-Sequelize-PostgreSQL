const { country } = require('../../../../config/database')

const findByPkCountry = async (countryID) => {
  const countryFound = await country.findByPk(countryID)
  return countryFound
}

module.exports = { findByPkCountry }
