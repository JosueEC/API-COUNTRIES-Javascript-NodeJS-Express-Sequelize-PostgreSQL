const { activity } = require('../../../../config/database')

const createActivity = async ({ name, difficulty, duration, season, countries }) => {
  const activityCreated = await activity.create({
    name,
    difficulty,
    duration,
    season
  })
  activityCreated.addCountrys(countries)

  return activityCreated
}

module.exports = { createActivity }
