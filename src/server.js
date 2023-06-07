const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const countryRoutes = require('./entities/country/routes/country.routes')
const activityRoutes = require('./entities/activity/routes/activity.routes')

const server = express()

server.use(cors())
server.use(express.json())
server.use(morgan('dev'))

server.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

server.use('/countries', countryRoutes)

server.use('/activities', activityRoutes)

module.exports = server
