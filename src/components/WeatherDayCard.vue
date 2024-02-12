<template>
  <article>
    <header>{{ formatDate(props.day) }}</header>
    <img :src="imageUrl" alt="" srcset="" />
    <div class="temps">
      <span class="temp">{{ tempFormatter.format(props.temperature2mMin) }}</span>
      <span class="temp">{{ tempFormatter.format(props.temperature2mMax) }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { codeToImage } from '@/auxiliar/WMOWeatherCodeToImage'

const props = defineProps<{
  day: Date
  weatherCode: number
  temperature2mMin: number
  temperature2mMax: number
}>()

function formatDate(day: Date): string {
  if (day.getDay() - new Date().getDay() == 1) return 'Tomorrow'
  return day.toUTCString().slice(0, 12)
}

const imageUrl = codeToImage(props.weatherCode)
const tempFormatter = new Intl.NumberFormat(navigator.language, {
  minimumIntegerDigits: 1,
  maximumFractionDigits: 0
})
</script>

<style scoped>
article {
  display: grid;
  grid-template-rows: 2fr 82px 3fr;
  justify-items: center;
  align-items: center;
  width: 120px;
  height: 177px;
  background: var(--bg-components);
  font-size: var(--font-standard-size);
}

img {
  width: 60%;
}

.temps {
  display: flex;
  justify-content: space-evenly;
  font-weight: var(--font-medium);
  width: 100%;
}

.temp::after {
  content: '°C';
  position: relative;
}
</style>
