<template>
  <div class="bigdata-container">
    <BigDataPart1 />
    <BigDataPart2 />
  </div>
</template>

<script setup lang="ts">
import BigDataPart1 from './bigdata/BigDataPart1.vue';
import BigDataPart2 from './bigdata/BigDataPart2.vue';
</script>

<style scoped>
.bigdata-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

@media (min-width: 768px) {
  .bigdata-container {
    padding: 2rem;
  }
}
</style>
