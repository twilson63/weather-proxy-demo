## Functions

<dl>
<dt><a href="#findWeather">findWeather(location)</a></dt>
<dd><p>returns a promise which then returns a weather forecast for a given city</p>
</dd>
<dt><a href="#convertCelsius2Fahrenheit">convertCelsius2Fahrenheit(celsius)</a></dt>
<dd></dd>
<dt><a href="#getWeatherIcon">getWeatherIcon(forecastAbbr)</a></dt>
<dd></dd>
</dl>

<a name="findWeather"></a>

## findWeather(location)
returns a promise which then returns a weather forecast for a given city

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>string</code> | city of forecast |

**Example**  
``` js
const info = await weather.find('Atlanta')
console.log(info)
```
<a name="convertCelsius2Fahrenheit"></a>

## convertCelsius2Fahrenheit(celsius)
**Kind**: global function  

| Param | Type |
| --- | --- |
| celsius | <code>number</code> | 

<a name="getWeatherIcon"></a>

## getWeatherIcon(forecastAbbr)
**Kind**: global function  

| Param | Type |
| --- | --- |
| forecastAbbr | <code>string</code> | 

