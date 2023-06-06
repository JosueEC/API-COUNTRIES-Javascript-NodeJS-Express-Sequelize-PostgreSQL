function formatCountries (arrayCountries) {
  const formattedCountries = arrayCountries.map((country) => {
    return {
      id: country.cioc,
      name: country.name.common,
      official_name: country.name.official,
      tag: country.name.common,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      area: country.area,
      population: country.population,
      image: country.flags.png,
      map: country.maps.googleMaps,
      continents: country.continents
    }
  })

  console.info(formattedCountries)
}

module.exports = { formatCountries }
