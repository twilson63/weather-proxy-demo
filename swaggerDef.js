module.exports = {
  info: {
    title: 'Weather Proxy',
    version: '1.0.0',
    description: 'Request the current weather for a city'
  },
  host: 'weather.twilson63.xyz',
  basePath: '/',
  apis: ['./app.js', './definitions.yaml']
}
