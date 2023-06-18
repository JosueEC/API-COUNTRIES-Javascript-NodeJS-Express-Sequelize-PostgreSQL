const { HTTP_NOT_FOUND, HTTP_FOUND, HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_INTERNAL_SERVER_ERROR } = require('../../../constants/httpCodes.constants')
const { httpError } = require('../../../helpers/httpError.helper')
const { httpSuccess } = require('../../../helpers/httpSuccess.helper')

const { findAllCountries } = require('../services/findAllCountries.service')
const { findByNameCountries } = require('../services/findByNameCountries.service')
const { findByPkCountry } = require('../services/findByPkCountry.service')
const { findAllCountryFlags } = require('../services/findAllCountryFlags.service')
const { bulkCreateCountries } = require('../../../services/Database/bulkCreateCountries.service')

const getCountries = async (req, res) => {
  try {
    const { name } = req.query

    const countriesFound = (name)
      ? await findByNameCountries(name)
      : await findAllCountries()

    httpSuccess(res, countriesFound, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
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

const getCountryFlags = async (req, res) => {
  try {
    const countryFlags = await findAllCountryFlags()
    httpSuccess(res, countryFlags, HTTP_FOUND)
  } catch (error) {
    httpError(res, error, HTTP_BAD_REQUEST)
  }
}

const postBulkCountries = async (req, res) => {
  try {
    const { countries } = req.body
    await bulkCreateCountries(countries)
    httpSuccess(res, 'Countries Created', HTTP_CREATED)
  } catch (error) {
    httpError(res, error, HTTP_INTERNAL_SERVER_ERROR)
  }
}

module.exports = {
  getCountries,
  getCountryByID,
  getCountryFlags,
  postBulkCountries
}
