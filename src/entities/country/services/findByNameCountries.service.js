const { country } = require('../../../../config/database')
const { Op } = require('sequelize')
const { notModified } = require('../../../utils/not-modified')

const findByNameCountries = async (countryName) => {
  const countriesFound = await country.findAll(
    {
      where: {
        name: {
          [Op.like]: `%${countryName.toLowerCase()}%`
        }
      }
    })

  if (countriesFound.length === 0) return notModified

  return countriesFound
}

module.exports = { findByNameCountries }
