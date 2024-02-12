<template>
  <div class="container">
    <div class="close-open-search">
      <div v-if="!search" class="open">
        <button @click="search = true">Seach for places</button>

        <IconMyLocation @click="getLocation" class="my-location" />
      </div>
      <div v-else class="close">
        <IconClose @click="search = false" />
      </div>
    </div>
    <slot v-if="!search" name="today"> </slot>
    <slot v-else name="search"> </slot>
  </div>
</template>

<script setup lang="ts">
import { getLocation } from '@/auxiliar/geoLocationAndReverseSeach'
import { ref } from 'vue'
import IconClose from './icons/IconClose.vue'
import IconMyLocation from './icons/IconMyLocation.vue'
const search = ref<boolean>(false)
const closeSearch = () => (search.value = false)
defineExpose({ closeSearch })
</script>

<style scoped>
.container {
  /* container-name: weather;
  container-type: inline-size; */
  padding: 1.4rem 0;
}
.close-open-search {
  padding: 0 2rem;
  padding-bottom: 1rem;
}
.open {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.close {
  min-height: 50px;
  display: flex;
  flex-direction: row-reverse;
}

button {
  background: var(--bg-search);
  color: var(--c-bright);
  font-size: var(--font-standard-size);
  font-weight: var(--font-semibold);
  padding: 1rem;
}

button:hover,
button:active {
  filter: hue-rotate(30deg);
}

.my-location:hover,
.my-location:active {
  color: var(--c-bright);
}
</style>
