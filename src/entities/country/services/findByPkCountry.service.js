const { country, activity } = require('../../../../config/database')

const findByPkCountry = async (countryID) => {
  const countryFound = await country.findByPk(countryID, {
    include: {
      model: activity,
      attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
      through: { attributes: [] }
    }
  })

  if (!countryFound) throw new Error('country not found')

  return countryFound
}

module.exports = { findByPkCountry }
