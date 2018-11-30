require('isomorphic-fetch')
const WEATHER_URL = 'https://www.metaweather.com/api/location'

exports.find = async location => {
  const locationInfo = await fetch(
    `${WEATHER_URL}/search?query=${encodeURI(location)}`
  ).then(r => r.json())

  if (locationInfo.length === 0) {
    return Promise.reject({ error: true, message: 'Could not find location' })
  }

  return await fetch(`${WEATHER_URL}/${locationInfo[0].woeid}`)
    .then(res => res.json())
    .then(info => {
      return {
        location: info.title,
        forecast: info.consolidated_weather[0].weather_state_name,
        temp: convertCelsius2Fahrenheit(info.consolidated_weather[0].the_temp),
        icon: getWeatherIcon(info.consolidated_weather[0].weather_state_abbr)
      }
    })
}

function convertCelsius2Fahrenheit(celsius) {
  return Math.round(celsius * (9 / 5) + 32)
}

function getWeatherIcon(forecastAbbr) {
  return `https://www.metaweather.com/static/img/weather/png/64/${forecastAbbr}.png`
}
