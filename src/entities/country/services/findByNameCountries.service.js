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

  if (!countriesFound) throw new Error('no countries found')

  return countriesFound
}

module.exports = { findByNameCountries }
