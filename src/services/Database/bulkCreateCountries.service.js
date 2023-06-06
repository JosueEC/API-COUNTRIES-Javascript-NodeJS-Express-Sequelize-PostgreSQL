const { country } = require('../../../config/database')

const bulkCreateCountries = async (arrayCountries) => {
  country.bulkCreate(arrayCountries)
}

module.exports = { bulkCreateCountries }
