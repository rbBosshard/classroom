<template>
  <div class="space-y-4">
    <div class="bg-white border-2 border-gray-300 rounded-lg p-4">
      <h5 class="font-bold text-gray-800 mb-3">{{ title }}</h5>

      <!-- Chart -->
      <div class="relative bg-gray-50 rounded-lg p-4" style="height: 300px">
        <!-- Y-axis labels -->
        <div
          class="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-600 py-4"
        >
          <span>{{ maxPercentage.toFixed(1) }}%</span>
          <span>{{ (maxPercentage * 0.75).toFixed(1) }}%</span>
          <span>{{ (maxPercentage * 0.5).toFixed(1) }}%</span>
          <span>{{ (maxPercentage * 0.25).toFixed(1) }}%</span>
          <span>0%</span>
        </div>

        <!-- Chart area -->
        <div class="ml-12 h-full flex items-end justify-start gap-0.5 overflow-x-auto pb-6">
          <div
            v-for="freq in frequencies"
            :key="freq.letter"
            class="flex-shrink-0 flex flex-col items-center justify-end group relative"
            :style="{ width: barWidth + 'px', height: '100%' }"
          >
            <!-- Bar -->
            <div
              class="w-full transition-all duration-300 hover:opacity-80 cursor-pointer rounded-t relative"
              :class="getBarColor(freq.letter)"
              :style="{ height: getBarHeight(freq.percentage) + '%' }"
              :title="`${freq.letter}: ${freq.percentage.toFixed(2)}%`"
            >
              <!-- Percentage label on hover -->
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-center absolute top-1 left-0 right-0"
                :class="freq.percentage > 5 ? 'text-white' : 'text-gray-700'"
              >
                {{ freq.percentage.toFixed(1) }}
              </div>
            </div>
            <!-- Letter label -->
            <div class="text-xs font-mono font-bold text-gray-700 mt-1 absolute -bottom-5">
              {{ freq.letter }}
            </div>
          </div>
        </div>
      </div>

      <!-- Legend & Statistics -->
      <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Top 5 letters -->
        <div class="bg-blue-50 rounded-lg p-3">
          <h6 class="text-sm font-bold text-gray-700 mb-2">📊 Häufigste Buchstaben</h6>
          <ol class="text-sm space-y-1">
            <li
              v-for="(freq, index) in topFrequencies"
              :key="'top-' + freq.letter"
              class="flex justify-between items-center"
            >
              <span class="font-mono font-bold">{{ index + 1 }}. {{ freq.letter }}</span>
              <span class="text-gray-600">{{ freq.percentage.toFixed(2) }}%</span>
            </li>
          </ol>
        </div>

        <!-- Analysis -->
        <div class="bg-purple-50 rounded-lg p-3">
          <h6 class="text-sm font-bold text-gray-700 mb-2">🔍 Analyse</h6>
          <div class="text-sm space-y-2 text-gray-700">
            <p><strong>Buchstabenanzahl:</strong> {{ totalLetters }}</p>
            <p><strong>Varianz:</strong> {{ variance.toFixed(2) }}%²</p>
            <p :class="getProfileClass()"><strong>Profil:</strong> {{ getProfileDescription() }}</p>
          </div>
        </div>
      </div>

      <!-- Explanation -->
      <div
        v-if="explanation"
        class="mt-4 p-3 bg-yellow-50 border border-yellow-300 rounded-lg text-sm text-gray-700"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="explanation"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface LetterFrequency {
  letter: string;
  count: number;
  percentage: number;
}

interface Props {
  text: string;
  title?: string;
  showReference?: boolean;
  referencePercentage?: number;
  explanation?: string;
  colorScheme?: 'blue' | 'purple' | 'green';
}

const props = withDefaults(defineProps<Props>(), {
  title: '📊 Buchstabenhäufigkeiten',
  showReference: false,
  referencePercentage: 17.4, // German E frequency
  explanation: '',
  colorScheme: 'blue',
});

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Calculate frequencies
const frequencies = computed((): LetterFrequency[] => {
  const text = props.text.toUpperCase().replace(/[^A-Z]/g, '');
  const counts: { [key: string]: number } = {};

  // Initialize all letters with 0
  for (const char of ALPHABET) {
    counts[char] = 0;
  }

  // Count letters
  for (const char of text) {
    if (ALPHABET.includes(char)) {
      counts[char]++;
    }
  }

  const total = text.length;

  // Convert to array with percentages
  return ALPHABET.split('').map(letter => ({
    letter,
    count: counts[letter],
    percentage: total > 0 ? (counts[letter] / total) * 100 : 0,
  }));
});

const totalLetters = computed(() => {
  return props.text.toUpperCase().replace(/[^A-Z]/g, '').length;
});

const topFrequencies = computed(() => {
  return [...frequencies.value].sort((a, b) => b.percentage - a.percentage).slice(0, 5);
});

const maxPercentage = computed(() => {
  const max = Math.max(...frequencies.value.map(f => f.percentage));
  return Math.max(max, props.referencePercentage * 1.2);
});

const barWidth = computed(() => {
  // Responsive bar width
  return 20;
});

// Calculate variance (measure of how "flat" the distribution is)
const variance = computed(() => {
  const mean = frequencies.value.reduce((sum, f) => sum + f.percentage, 0) / 26;
  const squaredDiffs = frequencies.value.map(f => Math.pow(f.percentage - mean, 2));
  return squaredDiffs.reduce((sum, diff) => sum + diff, 0) / 26;
});

function getBarHeight(percentage: number): number {
  return (percentage / maxPercentage.value) * 85; // 85% of container height
}

function getBarColor(_letter: string): string {
  const schemes = {
    blue: 'bg-blue-400 hover:bg-blue-500',
    purple: 'bg-purple-400 hover:bg-purple-500',
    green: 'bg-green-400 hover:bg-green-500',
  };
  return schemes[props.colorScheme];
}

function getProfileClass(): string {
  if (variance.value > 8) {
    return 'text-orange-700 font-semibold';
  } else if (variance.value < 2) {
    return 'text-green-700 font-semibold';
  }
  return 'text-blue-700';
}

function getProfileDescription(): string {
  if (variance.value > 8) {
    return 'Stark ausgeprägt (monoalphabetisch)';
  } else if (variance.value < 2) {
    return 'Flach (polyalphabetisch)';
  }
  return 'Mittel';
}
</script>
