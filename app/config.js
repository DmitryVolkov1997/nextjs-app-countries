const BASE_URL = 'https://restcountries.com/v2/'
const ALL_COUNTRIES = `${BASE_URL}all?fields=name,population,region,capital,flags`

const filterByName = (name) => `${BASE_URL}name/${name}`
const filterByCodes = (codes) => `${BASE_URL}alpha?codes=${codes.join(',')}`

export {ALL_COUNTRIES, filterByName, filterByCodes}