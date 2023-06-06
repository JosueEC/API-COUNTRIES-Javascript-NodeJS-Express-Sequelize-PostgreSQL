const { HTTP_NOT_FOUND, HTTP_FOUND } = require('../../../constants/httpCodes.constants')
const { httpError } = require('../../../helpers/httpError.helper')
const { httpSuccess } = require('../../../helpers/httpSuccess.helper')

const { findAllCountries } = require('../services/findAllCountries.service')

// TODO: Create the service for this handler
const getCountries = async (req, res) => {
  try {
    const countries = await findAllCountries()
    httpSuccess(res, countries, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

module.exports = {
  getCountries
}
