require('dotenv').config()
const fetch = require('node-fetch')
const { API_DOMAIN } = process.env

const { formatCountries } = require('./formatters/formatCountries')

const getAllCountries = async () => {
  const countries = await fetch(`${API_DOMAIN}/countries`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  formatCountries(countries)
}

module.exports = { getAllCountries }
