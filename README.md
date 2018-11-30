# Weather Proxy

Provides the current weather temperature and forecast for a given city.

## Usage

```js
const info = await fetch('https://weather.twilson63.xyz/?q=Atlanta').then(r =>
  r.json()
)
console.log(info)
```

## Development Setup

- clone repo

```
npm install
npm start
```
