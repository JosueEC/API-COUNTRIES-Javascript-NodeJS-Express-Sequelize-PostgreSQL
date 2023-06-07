const { HTTP_NOT_FOUND, HTTP_FOUND } = require('../../../constants/httpCodes.constants')
const { httpError } = require('../../../helpers/httpError.helper')
const { httpSuccess } = require('../../../helpers/httpSuccess.helper')

const { findAllCountries } = require('../services/findAllCountries.service')
const { findByNameCountries } = require('../services/findByNameCountries.service')
const { findByPkCountry } = require('../services/findByPkCountry.service')

const getCountries = async (req, res) => {
  try {
    const { name } = req.query

    const countriesFound = (name)
      ? await findByNameCountries(name)
      : await findAllCountries()

    if (countriesFound.length === 0) throw new Error('no countries found')
    httpSuccess(res, countriesFound, HTTP_FOUND)
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
