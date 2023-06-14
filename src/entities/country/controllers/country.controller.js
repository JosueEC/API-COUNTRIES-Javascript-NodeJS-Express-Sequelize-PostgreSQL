const { HTTP_NOT_FOUND, HTTP_FOUND, HTTP_BAD_REQUEST } = require('../../../constants/httpCodes.constants')
const { httpError } = require('../../../helpers/httpError.helper')
const { httpSuccess } = require('../../../helpers/httpSuccess.helper')

const { findAllCountries } = require('../services/findAllCountries.service')
const { findByNameCountries } = require('../services/findByNameCountries.service')
const { findByPkCountry } = require('../services/findByPkCountry.service')
const { findAllCountryIDs } = require('../services/findAllCountryIDs.service')

const getCountries = async (req, res) => {
  try {
    const { name } = req.query

    const countriesFound = (name)
      ? await findByNameCountries(name)
      : await findAllCountries()

    httpSuccess(res, countriesFound, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

const getCountryByID = async (req, res) => {
  try {
    const { countryID } = req.params

    const countryFound = await findByPkCountry(countryID)

    httpSuccess(res, countryFound, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_NOT_FOUND)
  }
}

const getCountryIDs = async (req, res) => {
  try {
    const countryIDs = await findAllCountryIDs()
    httpSuccess(res, countryIDs, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

module.exports = {
  getCountries,
  getCountryByID,
  getCountryIDs
}
