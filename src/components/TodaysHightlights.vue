<template>
  <section>
    <div class="highlights">
      <article>
        <h2>Wind status</h2>
        <h3>{{ formatter.format(weatherData?.current.windSpeed10m ?? 0) }} <span>km/h</span></h3>
        <h4>{{ weatherData?.current.windDirection10m ?? 0 }}</h4>
      </article>
      <article>
        <h2>Humidity</h2>
        <h3>{{ formatter.format(weatherData?.current.relativeHumidity2m ?? 0) }} <span>%</span></h3>
        <progress :value="weatherData?.current.relativeHumidity2m ?? 0" max="100"></progress>
      </article>
      <article>
        <h2>Visibility</h2>
        <h3>{{ weatherData?.hourly.visibility[0] ?? 0 }} <span>m</span></h3>
        <div>{{ weatherData?.hourly.visibility[0] }}</div>
      </article>
      <article>
        <h2>Air Pressure</h2>
        <h3>{{ weatherData?.current.surfacePressure ?? 0 }} <span>hPa</span></h3>
        <div>{{ weatherData?.current.surfacePressure }}</div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useOpenWeather } from '@/composables/openWeatherApi'
const formatter = new Intl.NumberFormat(navigator.language, {
  minimumIntegerDigits: 1,
  maximumFractionDigits: 0
})
const { weatherData } = useOpenWeather(null, null)
</script>

<style scoped>
article {
  background: var(--bg-components);
  color: var(--c-bright);
  display: grid;
  justify-content: center;
  justify-items: center;
}

section {
  container: card / inline-size;
  background: var(--bg-main);
}

.highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
}
</style>
