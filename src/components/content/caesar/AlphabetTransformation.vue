<template>
  <section>
    <h3 class="text-lg font-semibold text-gray-700 mb-4">
      Buchstaben-Transformation
    </h3>
    
    <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
      <div class="overflow-x-auto">
        <div class="flex gap-2 min-w-max pb-2">
          <div 
            v-for="(letter, index) in alphabet" 
            :key="`transform-${index}`" 
            class="flex flex-col items-center gap-1"
          >
            <!-- Original Letter -->
            <div 
              class="letter-box bg-blue-500"
              :aria-label="`Original letter ${letter}`"
            >
              {{ letter }}
            </div>
            
            <!-- Arrow with shift indicator -->
            <div class="flex flex-col items-center">
              <div class="text-gray-400 text-xs font-semibold">
                +{{ shift }}
              </div>
              <div class="text-purple-400 text-lg leading-none" aria-hidden="true">
                ↓
              </div>
            </div>
            
            <!-- Shifted Letter -->
            <div 
              class="letter-box bg-purple-500"
              :aria-label="`Shifted letter ${shiftedAlphabet[index]}`"
            >
              {{ shiftedAlphabet[index] }}
            </div>
          </div>
        </div>
      </div>
      
      <p class="text-sm text-gray-600 mt-4 text-center">
        ℹ️ So wird jeder Buchstabe um <strong>{{ shift }}</strong> 
        {{ positionText }} im Alphabet verschoben
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * Alphabet Transformation Component
 * Visual display of how each letter transforms with Caesar cipher
 */

interface Props {
  alphabet: string[]
  shiftedAlphabet: string[]
  shift: number
}

const props = defineProps<Props>()

const positionText = computed(() => 
  props.shift === 1 ? 'Position' : 'Positionen'
)
</script>

<style scoped>
.letter-box {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.5rem;
  font-family: monospace;
  font-weight: bold;
  font-size: 1.125rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: all 0.15s ease;
}

.letter-box:hover {
  transform: scale(1.1);
}

.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
