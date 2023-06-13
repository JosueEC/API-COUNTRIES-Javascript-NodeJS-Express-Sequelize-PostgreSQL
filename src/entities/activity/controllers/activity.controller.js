const { HTTP_NOT_FOUND, HTTP_FOUND, HTTP_BAD_REQUEST, HTTP_CREATED } = require('../../../constants/httpCodes.constants')
const { httpError } = require('../../../helpers/httpError.helper')
const { httpSuccess } = require('../../../helpers/httpSuccess.helper')

const { findAllActivities } = require('../services/findAllActivities.service')
const { createActivity } = require('../services/createActivity.service')

const getActivities = async (req, res) => {
  try {
    const activitiesFound = await findAllActivities()
    httpSuccess(res, activitiesFound, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, image, countries } = req.body

    const activityCreated = await createActivity({ name, difficulty, duration, season, image, countries })
    httpSuccess(res, activityCreated, HTTP_CREATED)
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

module.exports = {
  getActivities,
  postActivity
}
