import { expect, test } from 'vitest'
import { ref } from 'vue'
import { useOpenWeather } from '../openWeatherApi'

test('useOpenWeather', async () => {
  const { fetchWeather, weatherData, error } = useOpenWeather(ref(52.52), ref(13.41))
  await fetchWeather()

  expect(weatherData.value).not.toBeNull()
  expect(error.value).toBe(null)
})

test('useOpenWeather', async () => {
  const lat = ref(13.57)
  const con = ref(115.51)
  const { fetchWeather, weatherData, error } = useOpenWeather(lat, con)
  await fetchWeather()

  const data = weatherData.value
  expect(weatherData.value).not.toBeNull()
  expect(error.value).toBe(null)
  lat.value = 51.9225
  con.value = 4.47917
  await new Promise((f) => setTimeout(f, 100))
  expect(weatherData.value).not.toBeNull()
  expect(weatherData.value).not.toEqual(data)
  expect(error.value).toBe(null)
})
