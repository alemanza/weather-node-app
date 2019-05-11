const place = require('./place/place')
const weather = require('./weather/weather')

const argv = require('yargs').options({
  address: {
    alias: 'd',
    desc: 'Address of the city to get the weather',
    demand: true
  }
}).argv

// argv.address
const getInfo = async ( address ) => {
  try {
    const coords = await place.getPlaceLatLon( address )
    const theWeather = await weather.getWeather(coords.lat, coords.lon)
    return `El clima de ${coords.address} es de ${theWeather}°`
  } catch (e) {
    return `No se pudo determinar el clima de ${address} ${e}`
  }
}

getInfo( argv.address )
  .then(console.log)
  .catch(console.log)
