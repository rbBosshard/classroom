<template>
  <div
    class="border-2 rounded-lg p-6 transition-all"
    :class="[
      isRevealed
        ? userAnswer === example.isOneWay
          ? 'bg-green-50 border-green-400'
          : 'bg-red-50 border-red-400'
        : 'bg-white border-gray-300',
    ]"
  >
    <div class="flex items-center gap-4 mb-4">
      <div class="text-6xl flex-shrink-0">{{ example.emoji }}</div>
      <h4 class="text-2xl font-semibold text-gray-900">{{ example.title }}</h4>
    </div>

    <div class="flex gap-3 mb-4">
      <button
        class="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        :class="{ 'ring-4 ring-orange-300': isRevealed && userAnswer === true }"
        @click="checkAnswer(true)"
      >
        ➡️ Einwegfunktion
      </button>
      <button
        class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        :class="{ 'ring-4 ring-blue-300': isRevealed && userAnswer === false }"
        @click="checkAnswer(false)"
      >
        🔄 Keine Einwegfunktion
      </button>
    </div>

    <div v-if="isRevealed" class="space-y-3">
      <div
        class="flex items-center gap-2 p-3 rounded-lg"
        :class="userAnswer === example.isOneWay ? 'bg-green-100' : 'bg-red-100'"
      >
        <span class="text-3xl">{{ userAnswer === example.isOneWay ? '✅' : '❌' }}</span>
        <p
          class="font-bold text-lg"
          :class="userAnswer === example.isOneWay ? 'text-green-900' : 'text-red-900'"
        >
          {{ userAnswer === example.isOneWay ? 'Richtig!' : 'Leider falsch' }}
        </p>
      </div>

      <div class="bg-white border-2 border-gray-300 rounded-lg p-4">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-2xl">{{ example.isOneWay ? '🔒' : '🔄' }}</span>
          <p class="font-bold text-lg text-gray-900">
            {{ example.isOneWay ? 'Einwegfunktion' : 'Keine Einwegfunktion' }}
          </p>
        </div>
        <p class="text-gray-800">{{ example.explanation }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Example {
  title: string;
  emoji: string;
  isOneWay: boolean;
  explanation: string;
}

interface Props {
  example: Example;
}

defineProps<Props>();
const isRevealed = ref(false);
const userAnswer = ref<boolean | null>(null);

const checkAnswer = (answer: boolean) => {
  userAnswer.value = answer;
  isRevealed.value = true;
};
</script>
