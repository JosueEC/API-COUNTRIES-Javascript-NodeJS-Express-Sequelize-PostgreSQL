const { Router } = require('express')
const countryController = require('../controllers/country.controller')

const router = Router()

//  GET | /countries
router.get('/', countryController.getCountries)

//  GET | /countries/:countryID
router.get('/:idCountry', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'FOUND',
    data: 'country finded by ID'
  })
})

module.exports = router
