<script setup lang="ts">
import { ref, watch } from 'vue'
import CitySearchBox from './components/CitySearchBox.vue'
import Switcher from './components/SearchSwitcher.vue'
import TodaysHightlights from './components/TodaysHightlights.vue'
import TodaysWeather from './components/TodaysWeather.vue'
import WeatherDayCards from './components/WeatherDayCards.vue'
const search = ref<boolean>(false)
const switcher = ref<typeof Switcher | null>(null)
function closeSearch() {
  switcher.value?.closeSearch()
}
watch(search, () => console.log('search in ssbw', search.value))
</script>

<template>
  <div class="container">
    <main>
      <Switcher ref="switcher">
        <template v-slot:today>
          <TodaysWeather />
        </template>
        <template v-slot:search>
          <CitySearchBox @close-search="closeSearch" />
        </template>
      </Switcher>
      <section class="overview">
        <header></header>
        <div class="weather-cards">
          <WeatherDayCards />
        </div>
        <div class="highlights">
          <TodaysHightlights />
        </div>
        <p class="maker">created by username - devChallenges.io</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  container-type: inline-size;
}

main {
  display: grid;
  grid-template-columns: 3fr 7fr;
  padding: 0 2rem;
}
@container (max-width: 1100px) {
  main {
    grid-template-columns: 1fr;
    padding: 0;
  }
}
.overview {
  display: grid;
  grid-template-rows: 1fr 6fr 10fr 1fr;
}

header {
  height: 2rem;
}
.maker {
  font-size: var(--font-standard-small);
  text-align: center;
}
</style>
