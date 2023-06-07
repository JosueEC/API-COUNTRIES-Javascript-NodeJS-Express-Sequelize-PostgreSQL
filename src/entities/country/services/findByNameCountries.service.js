const { country } = require('../../../../config/database')
const { Op } = require('sequelize')

const findByNameCountries = async (countryName) => {
  const countriesFound = await country.findAll(
    {
      where: {
        name: {
          [Op.like]: `%${countryName}%`
        }
      }
    })

  return countriesFound
}

module.exports = { findByNameCountries }
