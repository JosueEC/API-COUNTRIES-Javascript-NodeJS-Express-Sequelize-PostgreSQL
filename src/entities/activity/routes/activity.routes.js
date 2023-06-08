const { Router } = require('express')

const activityController = require('../controllers/activity.controller')
const { validateCreateActivity } = require('../validators/validateCreateActivity.validator')

const router = Router()

//  GET | /activities
router.get('/', activityController.getActivities)

//  POST | /activities
router.post('/', validateCreateActivity, activityController.postActivity)

module.exports = router
