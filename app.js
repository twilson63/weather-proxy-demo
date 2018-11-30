const express = require('express')
const app = express()
const findWeather = require('./lib/weather').find

/**
 * @swagger
 * /:
 *   get:
 *     description: Get a weather forcast for a city
 *     parameters:
 *     - name: q
 *       type: string
 *       in: query
 *       description: city name
 *     responses:
 *       '200':
 *         description: Successful Response
 *         schema:
 *          $ref: '#/definitions/WeatherResponse
 *       '404':
 *         description: city not found
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
