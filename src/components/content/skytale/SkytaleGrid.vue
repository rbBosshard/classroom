<template>
  <div class="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border-2 border-purple-200">
    <h4 class="text-md font-semibold text-gray-700 mb-3">
      🔄 Transpositions-Gitter (Text wird spaltenweise um den Stab gewickelt)
    </h4>
    
    <!-- Grid -->
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full">
        <div 
          class="grid gap-1 mb-4"
          :style="{ 
            gridTemplateColumns: `repeat(${columns}, minmax(40px, 1fr))`,
            maxWidth: `${columns * 60}px`
          }"
        >
          <!-- Column Headers -->
          <div
            v-for="col in columns"
            :key="'header-' + col"
            class="text-center font-bold text-purple-600 text-sm p-2"
          >
            Spalte {{ col }}
          </div>
          
          <!-- Grid Cells -->
          <div
            v-for="(char, index) in gridCells"
            :key="'cell-' + index"
            class="aspect-square flex items-center justify-center text-lg font-mono font-bold rounded transition-all duration-300"
            :class="[
              char ? 'bg-white border-2 border-purple-400 text-purple-800' : 'bg-gray-100 border border-gray-300 text-gray-400',
              highlightedCell === index ? 'ring-4 ring-yellow-400 scale-110' : ''
            ]"
          >
            {{ char || '·' }}
          </div>
        </div>
      </div>
    </div>

    <!-- Leserichtung Erklärung -->
    <div class="bg-white p-3 rounded-lg border border-purple-200 mb-4">
      <p class="text-sm text-gray-700">
        <strong>Verschlüsselung:</strong> Lies die Buchstaben <span class="text-purple-600 font-bold">spaltenweise von oben nach unten</span>, Spalte für Spalte.
      </p>
      <p class="text-sm text-gray-600 mt-1">
        <strong>Entschlüsselung:</strong> Schreibe die Buchstaben wieder spaltenweise in das Gitter und lies dann <span class="text-purple-600 font-bold">zeilenweise</span>.
      </p>
    </div>

    <!-- Step-by-Step Button -->
    <button
      @click="$emit('animate')"
      :disabled="isAnimating || !hasContent"
      class="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
    >
      {{ isAnimating ? '⏳ Animation läuft...' : '▶️ Verschlüsselung animieren' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  columns: number;
  gridCells: string[];
  highlightedCell: number | null;
  isAnimating: boolean;
}

const props = defineProps<Props>();

defineEmits<{
  animate: [];
}>();

const hasContent = computed(() => {
  return props.gridCells.some(cell => cell !== '');
});
</script>
