export interface OpenWeatherDataInterface {
  current: {
    time: Date
    temperature2m: number
    relativeHumidity2m: number
    weatherCode: number
    surfacePressure: number
    windSpeed10m: number
    windDirection10m: number
  }
  hourly: {
    time: Array<Date>
    visibility: Float32Array
  }
  daily: {
    time: Array<Date>
    weatherCode: Float32Array
    temperature2mMax: Float32Array
    temperature2mMin: Float32Array
  }
}
