<template>
  <header class="mb-6 sm:mb-8">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
      🏛️ Caesar-Verschlüsselung
    </h2>
    
    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 sm:mb-6 rounded-r">
      <p class="text-gray-700 mb-3">
        <strong>Die älteste bekannte Verschlüsselung der Geschichte!</strong>
      </p>
      
      <p class="text-gray-700 mb-2">
        Julius Caesar nutzte diese Methode vor über 2000 Jahren, um militärische Nachrichten zu verschlüsseln. 
        Die Verschlüsselung basiert auf einer einfachen, aber effektiven Idee: <strong>Verschiebe jeden Buchstaben 
        im Alphabet um eine feste Anzahl von Positionen.</strong>
      </p>
      
      <div class="mt-3">
        <p class="text-gray-600 text-sm">
          <strong>Beispiel mit Verschiebung 3 (ROT3):</strong>
        </p>
        <div class="grid grid-cols-3 gap-2 mt-2 text-sm">
          <div 
            v-for="example in TRANSFORMATION_EXAMPLES" 
            :key="example.from"
          >
            <code class="bg-white px-2 py-1 rounded">
              {{ example.from }} → {{ example.to }}
            </code>
          </div>
        </div>
      </div>
      
      <p class="text-gray-600 text-sm mt-3">
        💡 <strong>Wusstest du?</strong> ROT13 (Verschiebung 13) ist besonders praktisch, weil man mit der 
        gleichen Operation verschlüsseln UND entschlüsseln kann!
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
/**
 * Caesar Header Component
 * Displays introduction and overview of Caesar cipher
 */

const TRANSFORMATION_EXAMPLES = [
  { from: 'A', to: 'D' },
  { from: 'B', to: 'E' },
  { from: 'C', to: 'F' },
] as const
</script>

<style scoped>
code {
  font-family: 'Courier New', monospace;
  font-weight: bold;
}
</style>
