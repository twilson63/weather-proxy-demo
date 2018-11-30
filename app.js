const express = require('express')
const app = express()
const findWeather = require('./lib/weather').find

/**
 * @swagger
 * /:
 *   get:
 *     description: Gets current weather forecast for a given city
 *     parameters:
 *     - name: q
 *       type: query
 *       description: city to find forecast
 *     responses:
 *       '200':
 *          description: Successful Response
 *          schema:
 *            '$ref': '#/definitions/WeatherResponse'
 *       '404':
 *          description: Not Found
 */
app.get('/', (req, res) => {
  if (req.query.q) {
    return findWeather(req.query.q)
      .then(info => res.send(info))
      .catch(err => {
        console.log(err.message)
        res
          .status(404)
          .send({ error: true, message: 'weather forecast not found' })
      })
  }
  return res.send({ name: 'weather proxy' })
})

module.exports = app
