import type Place from '@/stores/PlaceInterface'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useLocationStore = defineStore('location', () => {
  const localStorageString = localStorage.getItem('location')
  let defaultPlace = {
    name: 'Zwolle',
    admin1: 'Overijssel',
    country_code: 'nl',
    latitude: 52.5089759,
    longitude: 6.0943765,
    flag: '🇳🇱'
  } as Place

  if (localStorageString != null) {
    defaultPlace = JSON.parse(localStorageString) as Place
  }

  const location = ref<Place>(defaultPlace)

  watch(location, (newLocation) => {
    localStorage.setItem('location', JSON.stringify(newLocation))
  })

  const update = (newLocation: Place) => (location.value = newLocation)
  return { location, update }
})
