const { Router } = require('express')

const activityController = require('../controllers/activity.controller')

const router = Router()

//  GET | /activities
router.get('/', activityController.getActivities)

module.exports = router
