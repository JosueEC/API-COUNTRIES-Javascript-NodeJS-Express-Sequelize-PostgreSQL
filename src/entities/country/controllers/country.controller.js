const { HTTP_NOT_FOUND, HTTP_FOUND } = require('../../../constants/httpCodes.constants')
const { httpError } = require('../../../helpers/httpError.helper')
const { httpSuccess } = require('../../../helpers/httpSuccess.helper')

const { findAllCountries } = require('../services/findAllCountries.service')
const { findByPkCountry } = require('../services/findByPkCountry.service')

const getCountries = async (req, res) => {
  try {
    const countries = await findAllCountries()
    httpSuccess(res, countries, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

const getCountryByID = async (req, res) => {
  try {
    const { countryID } = req.params

    const countryFound = await findByPkCountry(countryID)

    if (!countryFound) throw new Error('no country found')
    httpSuccess(res, countryFound, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

module.exports = {
  getCountries,
  getCountryByID
}
