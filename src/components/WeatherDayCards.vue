<template>
  <article>
    <div class="cards-container">
      <div class="card-container" v-for="i in 5" :key="i">
        <WeatherDayCard
          v-if="weatherData !== undefined && weatherData !== null"
          :day="weatherData.daily.time[i]"
          :weatherCode="weatherData.daily.weatherCode[i]"
          :temperature2mMin="weatherData.daily.temperature2mMin[i]"
          :temperature2mMax="weatherData.daily.temperature2mMax[i]"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useOpenWeather } from '@/composables/openWeatherApi'
import WeatherDayCard from './WeatherDayCard.vue'

const { weatherData } = useOpenWeather(null, null)
console.log('weatherData', weatherData.value)
</script>

<style scoped>
article {
  container: card / inline-size;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-template-rows: auto;
  justify-content: center;
  gap: 1rem;
}
@container (max-width: 680px) {
  .cards-container {
    grid-template-columns: repeat(2, 120px);
  }
}

.card-container {
  background: blue;
}
</style>
