const { param } = require('express-validator')
const { validateResult } = require('../../../helpers/validate.helper')

const validateGetCountryByID = [
  param('countryID')
    .custom((value) => {
      const regexCountryID = /^[A-Z]{3}$/
      if (!regexCountryID.test(value)) {
        throw new Error('invalid country ID')
      }
      return true
    }),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateGetCountryByID }
