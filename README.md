# Weather API
## Routes:
[GET] /api/search | WeatherController > search
### Examples:
http://weather.serendip.cloud/api/search?q=Tehran
http://weather.serendip.cloud/api/search?q=Berlin
## Results
### Example:
```json
[
    {
      "location": {
        "name": "Berlin, Germany",
        "lat": "52.501",
        "long": "13.402",
        "timezone": "1",
        "alert": "",
        "degreetype": "C",
        "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
      },
      "current": {
        "temperature": "9",
        "skycode": "34",
        "skytext": "Mostly Sunny",
        "date": "2018-11-16",
        "observationtime": "14:00:00",
        "observationpoint": "Berlin",
        "feelslike": "6",
        "humidity": "60",
        "winddisplay": "22 km/h Southeast",
        "day": "Friday",
        "shortday": "Fri",
        "windspeed": "22 km/h",
        "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/34.gif"
      },
      "forecast": [
        {
          "low": "2",
          "high": "10",
          "skycodeday": "31",
          "skytextday": "Clear",
          "date": "2018-11-15",
          "day": "Thursday",
          "shortday": "Thu",
          "precip": ""
        },
        {
          "low": "1",
          "high": "7",
          "skycodeday": "32",
          "skytextday": "Sunny",
          "date": "2018-11-16",
          "day": "Friday",
          "shortday": "Fri",
          "precip": "0"
        },
        {
          "low": "-2",
          "high": "5",
          "skycodeday": "34",
          "skytextday": "Mostly Sunny",
          "date": "2018-11-17",
          "day": "Saturday",
          "shortday": "Sat",
          "precip": "0"
        },
        {
          "low": "3",
          "high": "5",
          "skycodeday": "26",
          "skytextday": "Cloudy",
          "date": "2018-11-18",
          "day": "Sunday",
          "shortday": "Sun",
          "precip": "20"
        },
        {
          "low": "0",
          "high": "4",
          "skycodeday": "26",
          "skytextday": "Cloudy",
          "date": "2018-11-19",
          "day": "Monday",
          "shortday": "Mon",
          "precip": "70"
        }
      ]
    },
    {
      "location": {
        "name": "Berlin, Germany",
        "lat": "52.516",
        "long": "13.377",
        "timezone": "1",
        "alert": "",
        "degreetype": "C",
        "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
      },
      "current": {
        "temperature": "9",
        "skycode": "34",
        "skytext": "Mostly Sunny",
        "date": "2018-11-16",
        "observationtime": "14:00:00",
        "observationpoint": "Berlin, BE, Germany",
        "feelslike": "6",
        "humidity": "60",
        "winddisplay": "22 km/h Southeast",
        "day": "Friday",
        "shortday": "Fri",
        "windspeed": "22 km/h",
        "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/34.gif"
      },
      "forecast": [
        {
          "low": "2",
          "high": "10",
          "skycodeday": "31",
          "skytextday": "Clear",
          "date": "2018-11-15",
          "day": "Thursday",
          "shortday": "Thu",
          "precip": ""
        },
        {
          "low": "1",
          "high": "7",
          "skycodeday": "32",
          "skytextday": "Sunny",
          "date": "2018-11-16",
          "day": "Friday",
          "shortday": "Fri",
          "precip": "0"
        },
        {
          "low": "-2",
          "high": "5",
          "skycodeday": "34",
          "skytextday": "Mostly Sunny",
          "date": "2018-11-17",
          "day": "Saturday",
          "shortday": "Sat",
          "precip": "0"
        },
        {
          "low": "3",
          "high": "5",
          "skycodeday": "26",
          "skytextday": "Cloudy",
          "date": "2018-11-18",
          "day": "Sunday",
          "shortday": "Sun",
          "precip": "20"
        },
        {
          "low": "0",
          "high": "4",
          "skycodeday": "26",
          "skytextday": "Cloudy",
          "date": "2018-11-19",
          "day": "Monday",
          "shortday": "Mon",
          "precip": "70"
        }
      ]
    },
    {
      "location": {
        "name": "Berlín, El Salvador",
        "lat": "13.496",
        "long": "-88.531",
        "timezone": "-6",
        "alert": "",
        "degreetype": "C",
        "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
      },
      "current": {
        "temperature": "20",
        "skycode": "32",
        "skytext": "Sunny",
        "date": "2018-11-16",
        "observationtime": "06:50:00",
        "observationpoint": "Berlín, El Salvador",
        "feelslike": "20",
        "humidity": "73",
        "winddisplay": "17 km/h North",
        "day": "Friday",
        "shortday": "Fri",
        "windspeed": "17 km/h",
        "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/32.gif"
      },
      "forecast": [
        {
          "low": "15",
          "high": "23",
          "skycodeday": "29",
          "skytextday": "Partly Cloudy",
          "date": "2018-11-15",
          "day": "Thursday",
          "shortday": "Thu",
          "precip": ""
        },
        {
          "low": "15",
          "high": "24",
          "skycodeday": "30",
          "skytextday": "Partly Sunny",
          "date": "2018-11-16",
          "day": "Friday",
          "shortday": "Fri",
          "precip": "10"
        },
        {
          "low": "15",
          "high": "26",
          "skycodeday": "32",
          "skytextday": "Sunny",
          "date": "2018-11-17",
          "day": "Saturday",
          "shortday": "Sat",
          "precip": "20"
        },
        {
          "low": "16",
          "high": "27",
          "skycodeday": "32",
          "skytextday": "Sunny",
          "date": "2018-11-18",
          "day": "Sunday",
          "shortday": "Sun",
          "precip": "60"
        },
        {
          "low": "16",
          "high": "26",
          "skycodeday": "34",
          "skytextday": "Mostly Sunny",
          "date": "2018-11-19",
          "day": "Monday",
          "shortday": "Mon",
          "precip": "90"
        }
      ]
    },
    {
      "location": {
        "name": "Berlín, Honduras",
        "lat": "14.851",
        "long": "-88.481",
        "timezone": "-6",
        "alert": "",
        "degreetype": "C",
        "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
      },
      "current": {
        "temperature": "15",
        "skycode": "9",
        "skytext": "Light Rain",
        "date": "2018-11-16",
        "observationtime": "07:00:00",
        "observationpoint": "Berlín, Honduras",
        "feelslike": "15",
        "humidity": "100",
        "winddisplay": "0 km/h",
        "day": "Friday",
        "shortday": "Fri",
        "windspeed": "0 km/h",
        "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/9.gif"
      },
      "forecast": [
        {
          "low": "15",
          "high": "17",
          "skycodeday": "9",
          "skytextday": "Light Rain",
          "date": "2018-11-15",
          "day": "Thursday",
          "shortday": "Thu",
          "precip": ""
        },
        {
          "low": "16",
          "high": "18",
          "skycodeday": "9",
          "skytextday": "Light Rain",
          "date": "2018-11-16",
          "day": "Friday",
          "shortday": "Fri",
          "precip": "80"
        },
        {
          "low": "16",
          "high": "19",
          "skycodeday": "26",
          "skytextday": "Cloudy",
          "date": "2018-11-17",
          "day": "Saturday",
          "shortday": "Sat",
          "precip": "90"
        },
        {
          "low": "18",
          "high": "22",
          "skycodeday": "9",
          "skytextday": "Light Rain",
          "date": "2018-11-18",
          "day": "Sunday",
          "shortday": "Sun",
          "precip": "100"
        },
        {
          "low": "19",
          "high": "24",
          "skycodeday": "11",
          "skytextday": "Rain Showers",
          "date": "2018-11-19",
          "day": "Monday",
          "shortday": "Mon",
          "precip": "100"
        }
      ]
    },
    {
      "location": {
        "name": "Berlin, CT",
        "lat": "41.627",
        "long": "-72.771",
        "timezone": "-5",
        "alert": "",
        "degreetype": "C",
        "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
      },
      "current": {
        "temperature": "1",
        "skycode": "13",
        "skytext": "Light Snow",
        "date": "2018-11-16",
        "observationtime": "08:10:00",
        "observationpoint": "Berlin, CT",
        "feelslike": "-2",
        "humidity": "94",
        "winddisplay": "13 km/h Southeast",
        "day": "Friday",
        "shortday": "Fri",
        "windspeed": "13 km/h",
        "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/13.gif"
      },
      "forecast": [
        {
          "low": "-3",
          "high": "1",
          "skycodeday": "16",
          "skytextday": "Snow",
          "date": "2018-11-15",
          "day": "Thursday",
          "shortday": "Thu",
          "precip": ""
        },
        {
          "low": "-2",
          "high": "4",
          "skycodeday": "34",
          "skytextday": "Mostly Sunny",
          "date": "2018-11-16",
          "day": "Friday",
          "shortday": "Fri",
          "precip": "100"
        },
        {
          "low": "-2",
          "high": "7",
          "skycodeday": "32",
          "skytextday": "Sunny",
          "date": "2018-11-17",
          "day": "Saturday",
          "shortday": "Sat",
          "precip": "0"
        },
        {
          "low": "2",
          "high": "4",
          "skycodeday": "28",
          "skytextday": "Mostly Cloudy",
          "date": "2018-11-18",
          "day": "Sunday",
          "shortday": "Sun",
          "precip": "50"
        },
        {
          "low": "-4",
          "high": "7",
          "skycodeday": "30",
          "skytextday": "Partly Sunny",
          "date": "2018-11-19",
          "day": "Monday",
          "shortday": "Mon",
          "precip": "70"
        }
      ]
    }
]
```
### Interfaces:
```typescript
      export interface WeatherInterface {
        location: WeatherLocationInterface;
        current: WeatherDetailedInterface;
        forecast: WeatherForecastInterface[];
      }
      
      export interface WeatherForecastInterface {
        low: number;
        high: number;
        skycodeday: number;
        skytextday: string;
        date: string;
        day: string;
        shortday: string;
        precip: number;
      }
      
      export interface WeatherLocationInterface {
        name: string;
        lat: string;
        long: string;
        timezone: string;
        alert: string;
        degreetype: string;
        imagerelativeurl: string;
      }
      
      export interface WeatherDetailedInterface {
        temperature: number;
      
        skycode: number;
      
        skytext: string;
      
        // ex : 2017-03-14
        date: string;
      
        // ex : 13:15:00
        observationtime: string;
        // ex : "San Francisco, California"
        observationpoint: string;
        feelslike: 70;
        humidity: 59;
        winddisplay: string;
        day: string;
        shortday: string;
        windspeed: string;
        imageUrl: string;
      }
```
### Sky codes:

```
    skycode - skytext
    0, 1 ,2, 3 ,4, 17, 35 - Thunderstorm
    5 - Rain/Snow mix
    6 - Sleet/Snow mix
    7 - Rain/Snow/Sleet mix
    8,9 - Icy
    10 - Rain/Sleet mix
    11 - Light Rain
    12 - Rain
    13 - Light Snow
    14,16,42,43 - Snow
    15 - Blizzard
    18,40 - Showers
    19 - Dust
    20 - Fog
    21 - Haze
    22 - Smoke
    23,24 - Windy
    25 - Frigid
    26 - Cloudy
    27,29,33 - Partly Cloudy (night)
    28,30,34 - Partly Cloudy
    31 - Clear (night)
    32 - Clear
    36 - Hot
    37,38 - Scattered Thunderstorms
    39 - Scattered Showers
    41 - Scattered Snow Showers
    44 - N/A
    45 - Scattered Rain Showers (night)
    46 - Scattered Snow Showers (night)
    47 - Scattered Thunderstorms (night)
```