const axios = require('axios')

const getPlaceLatLon = async ( addr ) => {

  const encodedAddress = encodeURI(addr)

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedAddress}`,
    headers: {'X-RapidAPI-Key': '92566234e1mshb99da8ed7bec273p1ee998jsn4c8ea2ab8c33'}
  })

  const res = await instance.get()

  const data = res.data.Results[0]

  if ( data.length === 0 ) {
    throw new Error(`No results in ${addr}`)
  }

  const address = data.name
  const lat = data.lat
  const lon = data.lon

  return {
    address,
    lat,
    lon
  }

}

module.exports = {
  getPlaceLatLon,
}