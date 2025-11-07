<template>
  <div class="mb-6 sm:mb-8">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
      {{ VIGENERE_HEADER.title }}
    </h2>
    <div class="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-4 mb-4 sm:mb-6 rounded-r">
      <p class="text-gray-700 mb-2" v-html="VIGENERE_HEADER.description"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VIGENERE_HEADER } from '@/constants/vigenere';
</script>
