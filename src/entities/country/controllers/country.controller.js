const { HTTP_NOT_FOUND, HTTP_FOUND } = require('../../../constants/httpCodes.constants')
const { httpError } = require('../../../helpers/httpError.helper')
const { httpSuccess } = require('../../../helpers/httpSuccess.helper')

// TODO: Create the service for this handler
const getCountries = (req, res) => {
  try {
    httpSuccess(res, 'handler with helper GET /countries', HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

module.exports = {
  getCountries
}
