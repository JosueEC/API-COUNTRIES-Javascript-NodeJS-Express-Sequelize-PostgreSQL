require('dotenv').config()
const Sequelize = require('sequelize')

const defineCountry = require('../src/entities/country/models/country.model')
const defineContinent = require('../src/entities/continent/models/continent.model')

const { DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, DB_HOST } = process.env

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false
})

defineCountry(database)
defineContinent(database)

module.exports = database
