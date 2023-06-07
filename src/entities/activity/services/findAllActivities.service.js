const { activity } = require('../../../../config/database')

const findAllActivities = async () => {
  const activitiesFound = await activity.findAll()

  if (activitiesFound.length === 0) throw new Error('activities not found')

  return activitiesFound
}

module.exports = { findAllActivities }
