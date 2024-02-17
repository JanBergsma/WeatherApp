<template>
  <div class="search" role="search">
    <form target="">
      <label for="city">
        <span id="search-icon"><IconSearch /></span>
        <input
          v-model="searchTerm"
          type="search"
          id="city"
          name="city"
          placeholder="search location"
        />
      </label>
      <button @click.prevent="doSearch" type="submit">Search</button>
    </form>
    <ul>
      <li v-for="(city, index) in places" :key="index" @click="() => select(city)">
        <span class="verticle-center">{{ city.name }}</span>
        <span class="verticle-center">{{ city.admin1 }}</span>
        <span class="verticle-center">{{ city.flag }}</span>
        <span class="verticle-center">
          <IconArrowRight class="arrow-right" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useLocationStore } from '@/stores/place'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { getFlagEmoji } from '../auxiliar/getFlagEmoji'
import type Place from '../stores/PlaceInterface.ts'
import IconArrowRight from './icons/IconArrowRight.vue'
import IconSearch from './icons/IconSearch.vue'

const emit = defineEmits(['closeSearch'])
const places = ref<Array<Place>>([])
const locationStore = useLocationStore()
const { location } = storeToRefs(locationStore)

const searchTerm = ref(location.value.name)

async function doSearch() {
  console.log(searchTerm.value)
  if (searchTerm.value && searchTerm.value.length > 1) {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm.value}`
    )
    console.log(response)
    const json = await response.json()
    const results = json.results || []
    console.log(results)

    places.value = results.map((c: Place) => ({
      name: c.name,
      admin1: c.admin1,
      latitude: c.latitude,
      longitude: c.longitude,
      flag: getFlagEmoji(c.country_code)
    }))
  }
}

function select(city: Place): void {
  locationStore.update(city)
  console.log('closeSearch emitted from CitySearchBox')
  emit('closeSearch')
}
</script>

<style scoped>
button {
  background: var(--bg-btn);
  color: var(--c-bright);
  border: none;
  font-weight: var(--font-semibold);
  font-size: var(--font-standard-size);
  padding-block: 0;
  padding-inline: 0;
  padding: 0 0.8rem;
}

button:hover,
button:active {
  filter: hue-rotate(10deg);
}

form {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 0.4rem;
}

label {
  border: 1px solid var(--c-bright);
  display: grid;
  grid-auto-flow: column;
  gap: 0.4rem;
  grid-template-columns: 1fr 9fr;
  padding: 0.4rem;
  width: min-content;
}

#search-icon {
  width: 1.8rem;
  display: grid;
  place-items: center;
}

input {
  background: var(--bg-components);
  font-size: var(--font-standard-size);
  color: var(--c-bright);
  height: 2rem;
  cursor: pointer;
  border: None;
  outline: none;
  padding-block: 0;
  padding-inline: 0;
}

.search {
  color: var(--c-bright);
  font-size: var(--font-standard-plus-size);
  font-weight: var(--font-medium);
}

ul {
  background: var(--bg-components);
  list-style-type: none;
  padding-block: 0;
  padding-inline: 0;
  margin-inline: 0;
  margin-block: 0;
  padding-top: 2rem;
  display: grid;
  gap: 1.4rem;
  overflow: visible;
}
.arrow-right {
  color: var(--c-dim);
  visibility: hidden;
}

li {
  display: grid;
  grid-template-columns: 60fr 40fr 1fr 1fr;
  height: 4rem;
  gap: 1rem;
  font-size: var(--font-standard-size);
  padding-left: 10%;
}

li:hover,
li:focus {
  border: var(--border-selected-city);
}

li:hover .arrow-right,
li:focus .arrow-right {
  visibility: visible;
}

.verticle-center {
  display: grid;
  align-items: center;
}
</style>
