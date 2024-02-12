<script setup lang="ts">
import CitySearchBox from './components/CitySearchBox.vue'
import Switcher from './components/SearchSwitcher.vue'
import TodaysWeather from './components/TodaysWeather.vue'
// const locationStore = useLocationStore()
// const { location } = storeToRefs(locationStore)
</script>

<template>
  <Switcher>
    <template v-slot:today>
      <TodaysWeather />
    </template>
    <template v-slot:search>
      <CitySearchBox />
    </template>
  </Switcher>
</template>

<style scoped>
.ci {
  width: 459px;
  height: 1023px;
  background: var(--bg-main);
}
</style>
./components/Place
