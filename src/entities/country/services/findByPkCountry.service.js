const { country, activity } = require('../../../../config/database')

const findByPkCountry = async (countryID) => {
  const countryFound = await country.findByPk(countryID, {
    include: {
      model: activity,
      attributes: ['id', 'name', 'dificulty', 'duration', 'season'],
      through: { attributes: [] }
    }
  })

  return countryFound
}

module.exports = { findByPkCountry }
