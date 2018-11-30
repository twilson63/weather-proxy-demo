Weather Proxy
=============
Request the current weather for a city

**Version:** 1.0.0


### /
---
##### ***GET***
**Description:** Get a weather forcast for a city

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| q | query | city name | No | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Successful Response | [WeatherResponse ](#weatherresponse) |
| 404' | city not found |  |

### Models
---

### WeatherResponse  

Weather Object Response

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| location | string | City of weather report | No |
| temp | number | Temperture in fahrenheit | No |
| forecast | string | short description of current forecast | No |
| icon | string | url to weather forecast icon | No |