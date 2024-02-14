import { fetchWeatherApi } from 'openmeteo'
import { ref, toValue, watch, type Ref } from 'vue'
import type { OpenWeatherDataInterface } from './openWeatherDataInterface'

const weatherData = ref<OpenWeatherDataInterface | null>(null)
const error = ref<unknown | null>(null)

const latitude = ref(0.0)
const longitude = ref(0.0)

const url = 'https://api.open-meteo.com/v1/forecast'

export function useOpenWeather(
  lati: Ref<number> | number | null,
  long: Ref<number> | number | null
) {
  const fetchWeather = async () => {
    const params = {
      latitude: toValue(latitude),
      longitude: toValue(longitude),
      current: [
        'temperature_2m',
        'relative_humidity_2m',
        'weather_code',
        'surface_pressure',
        'wind_speed_10m',
        'wind_direction_10m'
      ],
      hourly: 'visibility',
      daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min'],
      timezone: 'Europe/Berlin'
    }

    let responses = null
    try {
      responses = await fetchWeatherApi(url, params)
    } catch (e) {
      error.value = e
      return { weatherData, error }
    }
    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0]

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds()

    const current = response.current()!
    const hourly = response.hourly()!
    const daily = response.daily()!

    // Note: The order of weather variables in the URL query and the indices below need to match!
    weatherData.value = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: current.variables(0)!.value(),
        relativeHumidity2m: current.variables(1)!.value(),
        weatherCode: current.variables(2)!.value(),
        surfacePressure: current.variables(3)!.value(),
        windSpeed10m: current.variables(4)!.value(),
        windDirection10m: current.variables(5)!.value()
      },
      hourly: {
        time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        visibility: hourly.variables(0)!.valuesArray()!
      },
      daily: {
        time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        weatherCode: daily.variables(0)!.valuesArray()!,
        temperature2mMax: daily.variables(1)!.valuesArray()!,
        temperature2mMin: daily.variables(2)!.valuesArray()!
      }
    }
  }

  if (lati !== null && long !== null) {
    latitude.value = toValue(lati)
    longitude.value = toValue(long)
    watch([latitude, longitude], async () => {
      fetchWeather()
      console.log(weatherData.value)
    })
  }

  return { latitude, longitude, fetchWeather, weatherData, error }
}
