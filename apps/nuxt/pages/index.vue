<script setup lang="ts">
const {data, error} = useFetch('/api/check-cookie', {
  $fetch // Uncomment
});
</script>

<template>
  <div>
    On this page $fetch is defined, cookie is not set on SSR
  </div>

  <div v-if="data">{{ data }}</div>
  <div v-if="error">{{ error }}</div>
</template>
