import { useOpenWeather } from '@/composables/openWeatherApi'
import type Place from '@/stores/PlaceInterface'
import { useLocationStore } from '@/stores/place'
import { getFlagEmoji } from './getFlagEmoji'

const { latitude, longitude } = useOpenWeather(null, null)

export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, console.error)
  }
}

function showPosition(position: GeolocationPosition) {
  const locationStore = useLocationStore()
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=10&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const lat = parseFloat(data.lat)
      const lon = parseFloat(data.lon)

      locationStore.update({
        name: data.name,
        admin1: data.address.state,
        country_code: data.address.country_code,
        latitude: lat,
        longitude: lon,
        flag: getFlagEmoji(data.address.country_code)
      } as Place)

      latitude.value = lat
      longitude.value = lon
    })
    .catch(console.error)
}
