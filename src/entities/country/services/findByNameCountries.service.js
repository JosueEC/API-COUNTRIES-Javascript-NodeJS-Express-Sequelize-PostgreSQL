const { country } = require('../../../../config/database')
const { Op } = require('sequelize')

const findByNameCountries = async (countryName) => {
  const countriesFound = await country.findAll(
    {
      where: {
        name: {
          [Op.like]: `%${countryName.toLowerCase()}%`
        }
      }
    })

  if (countriesFound.length === 0) throw new Error('no results')

  return countriesFound
}

module.exports = { findByNameCountries }
