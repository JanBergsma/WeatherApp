<template>
  <Switcher ref="switcher">
    <template v-slot:today>
      <TodaysWeather />
    </template>
    <template v-slot:search>
      <CitySearchBox @close-search="closeSearch" />
    </template>
  </Switcher>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import CitySearchBox from '../components/CitySearchBox.vue'
import Switcher from '../components/SearchSwitcher.vue'
import TodaysWeather from '../components/TodaysWeather.vue'
const search = ref<boolean>(false)
const switcher = ref<typeof Switcher | null>(null)
function closeSearch() {
  switcher.value?.closeSearch()
}
watch(search, () => console.log('search in ssbw', search.value))
</script>

<style lang="scss" scoped></style>
