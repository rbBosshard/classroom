<template>
  <div class="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
    <h2 class="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 flex items-center gap-2">
      <span>🎯</span>
      <span>Lernziele</span>
    </h2>
    <ul class="space-y-2 text-sm sm:text-base">
      <li
        v-for="(objective, index) in OTP_LEARNING_OBJECTIVES"
        :key="index"
        class="flex items-start gap-2 sm:gap-3 text-blue-800"
      >
        <span class="text-blue-500 font-bold flex-shrink-0">✓</span>
        <span>{{ objective }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { OTP_LEARNING_OBJECTIVES } from '@/constants/onetimepad';
</script>
