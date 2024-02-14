<template>
  <section class="daily-weather">
    <div class="img-container">
      <img :src="currentWeatherIconUrl" alt="" />
    </div>
    <div class="temperature">{{ currentTemp }}</div>
    <div class="weather-text">
      <h3>{{ currentWeatherText }}</h3>
    </div>
    <div class="date-and-location">
      <p>Today - {{ currentDate }}</p>
      <div class="location">
        <IconLocation class="location-icon" />
        <p>{{ location.name }} {{ location.flag }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { codeToImage } from '@/auxiliar/WMOWeatherCodeToImage'
import { codeToText } from '@/auxiliar/WMOWeatherCodeToText'
import { useLocationStore } from '@/stores/place'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import IconLocation from '../components/icons/IconLocation.vue'
import { useOpenWeather } from '../composables/openWeatherApi'

const { location } = storeToRefs(useLocationStore())
const lati = ref(location.value.latitude)
const long = ref(location.value.longitude)
const { fetchWeather, weatherData, error } = useOpenWeather(lati, long)

fetchWeather()
console.log('Location:', location)
console.log('Weather:', weatherData.value)
console.log('Error:', error.value)

const tempFormatter = new Intl.NumberFormat(navigator.language, {
  minimumIntegerDigits: 1,
  maximumFractionDigits: 0
})
const currentTemp = computed(() => {
  if (weatherData.value) return tempFormatter.format(weatherData.value.current.temperature2m)
  else return ''
})

const currentWeatherIconUrl = computed(() =>
  codeToImage(weatherData.value !== null ? weatherData.value.current.weatherCode : -1)
)

const currentWeatherText = computed(() =>
  codeToText(weatherData.value !== null ? weatherData.value.current.weatherCode : -1)
)

const currentDate = computed(() => new Date().toDateString())
</script>

<style scoped>
.daily-weather {
  position: relative;
  display: grid;
  /* align-content: stretch; */
  /* justify-content: center; */
  justify-items: center;
  height: 80%;
}

.daily-weather::before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: no-repeat center/150% url('../assets/icons/Cloud-background.png');
  opacity: 10%;
}

.temperature {
  color: var(--c-bright);
  font-size: var(--font-xxx-large-size);
}
.temperature::after {
  content: '℃';
  position: relative;
  color: var(--c-dim);
  font-size: var(--font-x-large-size);
}

.weather-text h3 {
  font-size: var(--font-large-size);
  font-weight: var(--font-semibold);
  text-align: center;
}

.date-and-location {
  font-size: var(--font-standard-size);
  display: grid;
  place-items: center;
}
.location {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  align-items: center;
}
.location-icon {
  width: 1.4rem;
}

img {
  width: 100%;
}
.img-container {
  margin: auto;
}
</style>
