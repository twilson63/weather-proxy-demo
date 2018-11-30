const express = require('express')
const app = express()
const findWeather = require('./lib/weather').find

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
