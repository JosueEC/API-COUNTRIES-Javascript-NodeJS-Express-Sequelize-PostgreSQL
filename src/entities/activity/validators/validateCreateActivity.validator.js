const { body } = require('express-validator')
const { validateResult } = require('../../../helpers/validate.helper')

const validateCreateActivity = [
  body('name')
    .exists()
    .notEmpty(),
  body('difficulty')
    .exists()
    .notEmpty()
    .isNumeric()
    .isInt()
    .isIn([1, 2, 3, 4, 5]),
  body('duration')
    .exists()
    .notEmpty()
    .isNumeric()
    .isInt()
    .custom((value) => {
      if (value >= 1 && value <= 10) return true
      throw new Error('invalid activity duration')
    }),
  body('season')
    .exists()
    .notEmpty()
    .isLowercase()
    .isIn(['verano', 'otoño', 'invierno', 'primavera']),
  body('image')
    .exists()
    .notEmpty()
    .isURL(),
  body('countries')
    .exists()
    .notEmpty()
    .isArray()
    .custom((value) => {
      const regexCountryID = /^[A-Z]{3}$/
      const validIDS = value.every((idCountry) => {
        return regexCountryID.test(idCountry)
      })

      if (!validIDS) throw new Error('invalid country ID for the foreign key')
      return true
    }),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateActivity }
