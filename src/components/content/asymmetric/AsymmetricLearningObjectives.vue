<template>
  <details class="mb-6" closed>
    <summary
      class="cursor-pointer bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r shadow-sm hover:from-blue-100 hover:to-purple-100 transition-colors"
    >
      <h4 class="font-bold text-blue-800 inline-flex items-center gap-2">🎯 Lernziele</h4>
    </summary>
    <div
      class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 sm:p-6 mb-6 rounded-r shadow-sm border-t-0 pt-0"
    >
      <p class="text-gray-700 text-sm mb-3">Du kannst:</p>
      <ul class="space-y-2">
        <li
          v-for="(objective, index) in ASYMMETRIC_LEARNING_OBJECTIVES"
          :key="'objective-' + index"
          class="flex items-start gap-2"
        >
          <span class="text-green-600 font-bold mt-0.5">{{ objective.icon }}</span>
          <span class="text-gray-700" v-html="objective.text"></span>
        </li>
      </ul>
    </div>
  </details>
</template>

<script setup lang="ts">
import { ASYMMETRIC_LEARNING_OBJECTIVES } from '@/constants/asymmetric';
</script>
