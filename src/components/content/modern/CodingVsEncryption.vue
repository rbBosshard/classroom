<template>
  <section class="mb-8">
    <h3 class="text-xl font-bold text-gray-800 mb-4">🧩 
        
    </h3>

    <!-- Interactive Quiz -->
    <div class="bg-white border-2 border-gray-200 rounded-lg p-6">
      <div class="mb-6">
        <h4 class="font-bold text-gray-800 mb-3">🎯 Puzzle: Erkenne den Unterschied!</h4>
        <p class="text-sm text-gray-600">
          Entscheide bei jeder Aussage: Ist das
          <strong class="text-blue-600">Codierung</strong> (Format umwandeln, öffentlich) oder
          <strong class="text-purple-600">Verschlüsselung</strong> (geheim halten, braucht
          Schlüssel)?
        </p>
      </div>

      <div class="space-y-3">
        <div
          v-for="question in questions"
          :key="question.id"
          class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <p class="text-gray-800 mb-3">{{ question.statement }}</p>

          <div class="flex gap-3">
            <button
              :class="[
                'flex-1 py-2 px-4 rounded font-medium transition-all',
                answers[question.id] === 'coding'
                  ? answered[question.id]
                    ? question.answer === 'coding'
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
              @click="selectAnswer(question.id, 'coding')"
            >
              📝 Codierung
            </button>

            <button
              :class="[
                'flex-1 py-2 px-4 rounded font-medium transition-all',
                answers[question.id] === 'encryption'
                  ? answered[question.id]
                    ? question.answer === 'encryption'
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
              @click="selectAnswer(question.id, 'encryption')"
            >
              🔒 Verschlüsselung
            </button>
          </div>

          <!-- Feedback -->
          <transition name="fade">
            <div
              v-if="answered[question.id]"
              :class="[
                'mt-3 p-3 rounded text-sm',
                answers[question.id] === question.answer
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-red-800',
              ]"
            >
              <p class="font-medium mb-1">
                {{ answers[question.id] === question.answer ? '✅ Richtig!' : '❌ Nicht ganz...' }}
              </p>
              <p>{{ question.explanation }}</p>
            </div>
          </transition>
        </div>
      </div>

      <!-- Score -->
      <div v-if="allAnswered" class="mt-6 p-4 bg-blue-50 rounded-lg text-center">
        <p class="text-lg font-bold text-gray-800">
          🎉 Ergebnis: {{ correctCount }} / {{ questions.length }} richtig
        </p>
        <button
          class="mt-3 px-6 py-2 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors"
          @click="reset"
        >
          🔄 Nochmal versuchen
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { CODING_VS_ENCRYPTION_QUESTIONS } from '../../../constants/modern';

/**
 * Coding vs Encryption Interactive Quiz
 */

const questions = CODING_VS_ENCRYPTION_QUESTIONS;
const answers = ref<Record<string, 'coding' | 'encryption'>>({});
const answered = ref<Record<string, boolean>>({});

const selectAnswer = (questionId: string, answer: 'coding' | 'encryption') => {
  if (!answered.value[questionId]) {
    answers.value[questionId] = answer;
    answered.value[questionId] = true;
  }
};

const allAnswered = computed(() => {
  return questions.every(q => answered.value[q.id]);
});

const correctCount = computed(() => {
  return questions.filter(q => answers.value[q.id] === q.answer).length;
});

const reset = () => {
  answers.value = {};
  answered.value = {};
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
