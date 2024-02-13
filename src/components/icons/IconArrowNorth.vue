<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
    fill="currentColor"
    :transform="str"
  >
    <path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const degree = defineModel('degree')
const str = computed(() => `rotate(${degree.value} 0 0)`)
</script>
