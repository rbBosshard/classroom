<template>
  <aside class="mb-6 bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
    <h3 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
      <span class="text-xl">📚</span>
      Wusstest du schon?
    </h3>
    
    <ul class="space-y-2 text-sm text-gray-700">
      <li 
        v-for="(fact, index) in FUN_FACTS" 
        :key="index"
        class="flex items-start gap-2"
      >
        <span class="text-purple-600 font-bold">•</span>
        <span v-html="fact"></span>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
/**
 * Caesar Fun Facts Component
 * Displays interesting historical facts about Caesar cipher
 */

const FUN_FACTS = [
  'ROT13 (Rotation um 13) ist besonders, weil <strong>zweimaliges Anwenden</strong> den Originaltext zurückgibt!',
  'Caesar nutzte diese Verschlüsselung für <strong>militärische Befehle</strong>. Damals konnte kaum jemand lesen, was zusätzlichen Schutz bot.',
] as const
</script>
