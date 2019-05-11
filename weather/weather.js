const axios = require('axios')

const getWeather = async ( lat, lon ) => {

  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=e1eec54f4086c0ea3ccc767356cbee4a&units=metric`)

  return res.data.main.temp
}

module.exports = {
  getWeather
}