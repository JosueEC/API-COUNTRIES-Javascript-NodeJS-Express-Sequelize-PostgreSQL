require('dotenv').config()
const Sequelize = require('sequelize')

const defineCountry = require('../src/entities/country/models/country.model')
const defineActivity = require('../src/entities/activity/models/activity.model')

const { DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, DB_HOST } = process.env

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false
})

defineCountry(database)
defineActivity(database)

const { country, activity } = database.models

country.belongsToMany(activity, { through: 'country-activity', foreignKey: 'country_id' })
activity.belongsToMany(country, { through: 'country-activity', foreignKey: 'activity_id' })

module.exports = {
  database,
  ...database.models
}
