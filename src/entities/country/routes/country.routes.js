const { Router } = require('express')
const countryController = require('../controllers/country.controller')

const router = Router()

// GET | /countries
router.use('/', countryController.getCountries)

module.exports = router
