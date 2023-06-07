const { Router } = require('express')

const router = Router()

// TODO: Create the controller and handler for this endpoint
router.get('/', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'FOUND',
    data: 'activities found'
  })
})

module.exports = router
