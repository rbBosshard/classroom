<template>
  <section class="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 p-6 rounded-xl">
    <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
      <span class="text-2xl">🎯</span>
      Challenge
    </h3>

    <!-- Active Challenge -->
    <div v-if="!challengeCompleted">
      <div class="bg-white p-4 rounded-lg mb-4 shadow-sm">
        <p class="text-gray-700 mb-2">
          <strong>Aufgabe:</strong> Verschlüssele das Wort
          <span class="challenge-badge bg-blue-100 text-blue-900">
            {{ challenge.word }}
          </span>
          mit der Verschiebung
          <span class="challenge-badge bg-purple-100 text-purple-900">
            {{ challenge.shift }}
          </span>
        </p>
        <p class="text-sm text-gray-600 mt-2">
          💡 Tipp: Stelle die Caesar-Scheibe oben auf {{ challenge.shift }} ein und lies die Verschlüsselung ab!
        </p>
      </div>

      <div class="flex flex-wrap gap-3 items-end">
        <div class="flex-1 min-w-[200px]">
          <label for="challenge-answer" class="block text-sm font-semibold text-gray-700 mb-2">
            Deine Antwort:
          </label>
          <input id="challenge-answer" :value="userAnswer" @input="handleAnswerInput" @keyup.enter="handleCheck"
            type="text" placeholder="Gib das verschlüsselte Wort ein..." class="answer-input" />
        </div>
        <button @click="handleCheck"
          class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md">
          ✓ Überprüfen
        </button>
      </div>

      <!-- Feedback -->
      <div v-if="challengeFeedback" :class="feedbackClasses" role="alert">
        {{ challengeFeedback.message }}
      </div>
    </div>

    <!-- Success State -->
    <div v-else class="text-center py-6">
      <p class="text-6xl mb-3" aria-hidden="true">🎉</p>
      <p class="text-green-700 font-bold text-2xl mb-2">Perfekt gelöst!</p>
      <p class="text-gray-700 mb-4">Du hast die Caesar-Verschlüsselung verstanden!</p>
      <button @click="handleNewChallenge"
        class="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-md">
        🔄 Nächste Challenge
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Challenge, ChallengeFeedback } from '@/types/caesar'

/**
 * Caesar Challenge Component
 * Interactive challenge for testing Caesar cipher understanding
 */

interface Props {
  challenge: Challenge
  userAnswer: string
  challengeCompleted: boolean
  challengeFeedback: ChallengeFeedback | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:userAnswer': [value: string]
  check: []
  newChallenge: []
}>()

/**
 * Computed classes for feedback message
 */
const feedbackClasses = computed(() => {
  const baseClasses = 'mt-4 p-4 rounded-lg font-semibold'

  if (!props.challengeFeedback) return baseClasses

  return props.challengeFeedback.correct
    ? `${baseClasses} bg-green-200 text-green-900 border-2 border-green-400`
    : `${baseClasses} bg-red-200 text-red-900 border-2 border-red-400`
})

/**
 * Handle answer input
 */
function handleAnswerInput(event: Event): void {
  const value = (event.target as HTMLInputElement).value
  emit('update:userAnswer', value)
}

/**
 * Handle check button click
 */
function handleCheck(): void {
  emit('check')
}

/**
 * Handle new challenge button click
 */
function handleNewChallenge(): void {
  emit('newChallenge')
}
</script>

<style scoped>
.challenge-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 1.125rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.answer-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-family: monospace;
  text-transform: uppercase;
}

.answer-input:focus {
  outline: none;
  border-color: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}
</style>
