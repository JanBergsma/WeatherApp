<template>
  <section>
    <div class="highlights">
      <article>
        <h2>Wind status</h2>
        <h3>{{ formatter.format(weatherData?.current.windSpeed10m ?? 0) }}<span>km/h</span></h3>
        <div class="wind-direction">
          <IconArrowNorth v-model:degree="windDirection" /> <span>{{ windDirectionText }}</span>
        </div>
      </article>
      <article>
        <h2>Humidity</h2>
        <h3>{{ formatter.format(weatherData?.current.relativeHumidity2m ?? 0) }}<span>%</span></h3>
        <label for="humidity-slider">
          <div class="humidity-notation">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <progress
            id="humidity-slider"
            class="humidity-slider"
            :value="weatherData?.current.relativeHumidity2m ?? 0"
            max="100"
          ></progress>
          <div class="humidity-percentage">%</div>
        </label>
      </article>
      <article>
        <h2>Visibility</h2>
        <h3>{{ formatter.format(weatherData?.hourly.visibility[0] ?? 0) }}<span>m</span></h3>
      </article>
      <article>
        <h2>Air Pressure</h2>
        <h3>{{ formatter.format(weatherData?.current.surfacePressure ?? 0) }}<span>hPa</span></h3>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useOpenWeather } from '@/composables/openWeatherApi'
import { computed } from 'vue'
import IconArrowNorth from './icons/IconArrowNorth.vue'
const formatter = new Intl.NumberFormat(navigator.language, {
  minimumIntegerDigits: 1,
  maximumFractionDigits: 0
})
const { weatherData } = useOpenWeather(null, null)
function degToCompass(degree: number): string {
  var val = Math.floor(degree / 22.5 + 0.5)
  var arr = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW'
  ]
  return arr[val % 16]
}
const windDirection = computed(() => weatherData.value?.current.windDirection10m ?? 0)
const windDirectionText = computed(() =>
  degToCompass(weatherData.value?.current.windDirection10m ?? 0)
)
</script>

<style scoped>
article {
  background: var(--bg-components);
  color: var(--c-bright);
  display: grid;
  gap: 1.2rem;
  justify-content: center;
  justify-items: center;
  align-content: space-evenly;
  width: 328px;
  padding-top: 1rem;
  padding-bottom: 1.4rem;
}

section {
  container: card / inline-size;
  background: var(--bg-main);
}

h2 {
  font-size: var(--font-standard-plus-size);
  font-weight: var(--font-medium);
  padding: 0;
  margin: 0;
}

h3 {
  font-size: var(--font-x-large-size);
  font-weight: var(--font-bold);
  margin: 0;
  padding: 0;
}

h3 span {
  font-size: var(--font-standard-size);
  font-weight: var(--font-medium);
}

label {
  width: 229px;
  font-size: 0.6rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: 0;
  padding: 0;
}

.humidity-notation {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40%;
}
.humidity-percentage {
  display: flex;
  justify-content: flex-end;
}

progress {
  padding-top: 0;
  background: #e7e7eb;
  height: 8px;
  width: 229px;
  border-radius: 5px;
}

progress::-webkit-progress-value {
  background: #ffec65;
  border-radius: 5px;
}
progress::-webkit-progress-bar {
  background: #e7e7eb;
  border-radius: 5px;
}

progress::-moz-progress-bar {
  background: #ffec65;
}

.highlights {
  display: grid;
  grid-template-columns: 328px 328px;
  justify-content: center;
  gap: 1rem;
}

@container (max-width: 400px) {
  .highlights {
    grid-template-columns: 328px;
    grid-template-rows: autor;
  }
}

.wind-direction {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
</style>
