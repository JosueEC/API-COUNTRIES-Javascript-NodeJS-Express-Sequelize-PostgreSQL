const { Router } = require('express')
const countryController = require('../controllers/country.controller')

const router = Router()

//  GET | /countries
router.get('/', countryController.getCountries)

//  GET | /countries/:countryID
router.get('/:countryID', countryController.getCountryByID)

module.exports = router
