const { activity } = require('../../../../config/database')

const createActivity = async ({ name, difficulty, duration, season, image, countries }) => {
  const activityCreated = await activity.create({
    name,
    difficulty,
    duration,
    season,
    image
  })
  activityCreated.addCountries(countries)

  return activityCreated
}

module.exports = { createActivity }
