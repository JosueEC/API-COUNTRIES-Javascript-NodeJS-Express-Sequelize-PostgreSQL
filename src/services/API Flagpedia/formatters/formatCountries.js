function formatCountries (arrayCountries) {
  const formattedCountries = arrayCountries.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common.toLowerCase(),
      official_name: country.name.official.toLowerCase(),
      region: country.region.toLowerCase(),
      subregion: country.subregion?.toLowerCase() || 'No Region',
      capital: country.capital?.pop().toLowerCase() || 'No Capital',
      area: country.area,
      population: country.population,
      image: country.flags.png,
      map: country.maps.googleMaps,
      continent: country.continents?.pop().toLowerCase()
    }
  })

  return formattedCountries
}

module.exports = { formatCountries }
