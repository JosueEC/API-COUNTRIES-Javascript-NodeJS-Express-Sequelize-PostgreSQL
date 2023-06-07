const { HTTP_NOT_FOUND, HTTP_FOUND, HTTP_BAD_REQUEST, HTTP_CREATED } = require('../../../constants/httpCodes.constants')
const { httpError } = require('../../../helpers/httpError.helper')
const { httpSuccess } = require('../../../helpers/httpSuccess.helper')

const { findAllActivities } = require('../services/findAllActivities.service')

const getActivities = async (req, res) => {
  try {
    const activitiesFound = await findAllActivities()
    httpSuccess(res, activitiesFound, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

// TODO: Create the service for this handler
const postActivity = async (req, res) => {
  try {
    httpSuccess(res, 'handler POST /activities', HTTP_CREATED)
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

module.exports = {
  getActivities,
  postActivity
}
