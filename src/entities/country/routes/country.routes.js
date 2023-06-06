const { Router } = require('express')

const router = Router()

// TODO: Create a handler for this function
// GET | /countries
router.use('/', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'FOUND',
    data: 'routes /countries'
  })
})

module.exports = router
