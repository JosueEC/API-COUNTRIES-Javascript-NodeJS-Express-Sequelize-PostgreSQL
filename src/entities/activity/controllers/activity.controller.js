const { HTTP_NOT_FOUND, HTTP_FOUND } = require('../../../constants/httpCodes.constants')
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

module.exports = { getActivities }
