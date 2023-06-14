const { Router } = require('express')
const countryController = require('../controllers/country.controller')

const { validateGetCountryByID } = require('../validators/validateGetCountryByID.validator')

const router = Router()

//  GET | /countries
router.get('/', countryController.getCountries)

//  GET | /countries/:countryID
router.get('/:countryID', validateGetCountryByID, countryController.getCountryByID)

// GET | /countries/all/IDs
router.get('/all/flags', countryController.getCountryFlags)

module.exports = router
