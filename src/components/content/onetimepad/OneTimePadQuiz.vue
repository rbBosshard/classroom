<template>
  <section id="quiz" class="mb-8 sm:mb-12">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
      <span>🎯</span>
      <span>Quiz: Teste dein Wissen</span>
    </h2>

    <div class="space-y-6">
      <div
        v-for="(question, qIndex) in OTP_QUIZ_QUESTIONS"
        :key="question.id"
        class="bg-white p-4 sm:p-6 rounded-lg shadow-md"
      >
        <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-4">
          {{ qIndex + 1 }}. {{ question.question }}
        </h3>

        <div class="space-y-2 mb-4">
          <button
            v-for="(option, oIndex) in question.options"
            :key="oIndex"
            :disabled="answers[qIndex] !== undefined"
            :class="[
              'w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-colors',
              answers[qIndex] === undefined
                ? 'border-gray-300 hover:border-purple-400 hover:bg-purple-50 cursor-pointer'
                : answers[qIndex] === oIndex
                  ? oIndex === question.correctIndex
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : oIndex === question.correctIndex
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-gray-50 opacity-60',
              'disabled:cursor-not-allowed',
            ]"
            @click="selectAnswer(qIndex, oIndex)"
          >
            <div class="flex items-center gap-3">
              <span
                :class="[
                  'flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base',
                  answers[qIndex] === undefined
                    ? 'bg-gray-200 text-gray-600'
                    : answers[qIndex] === oIndex
                      ? oIndex === question.correctIndex
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : oIndex === question.correctIndex
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-400',
                ]"
              >
                {{ String.fromCharCode(65 + oIndex) }}
              </span>
              <span class="text-sm sm:text-base">{{ option }}</span>
            </div>
          </button>
        </div>

        <!-- Explanation -->
        <div
          v-if="answers[qIndex] !== undefined"
          :class="[
            'p-4 rounded-lg border-l-4',
            answers[qIndex] === question.correctIndex
              ? 'bg-green-50 border-green-500'
              : 'bg-blue-50 border-blue-500',
          ]"
        >
          <p class="text-sm sm:text-base text-gray-800">
            <strong v-if="answers[qIndex] === question.correctIndex" class="text-green-700">
              ✅ Richtig!
            </strong>
            <strong v-else class="text-red-700">❌ Nicht ganz.</strong>
            {{ question.explanation }}
          </p>
        </div>
      </div>

      <!-- Score -->
      <div
        v-if="Object.keys(answers).length === OTP_QUIZ_QUESTIONS.length"
        class="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-lg shadow-lg text-center"
      >
        <h3 class="text-2xl font-bold mb-2">🎉 Quiz abgeschlossen!</h3>
        <p class="text-3xl font-bold mb-2">{{ score }} / {{ OTP_QUIZ_QUESTIONS.length }}</p>
        <p class="text-lg mb-4">
          {{ getScoreMessage() }}
        </p>
        <button
          class="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          @click="resetQuiz"
        >
          🔄 Nochmal versuchen
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { OTP_QUIZ_QUESTIONS } from '@/constants/onetimepad';

const answers = ref<Record<number, number>>({});

const score = computed(() => {
  return Object.entries(answers.value).filter(
    ([qIndex, aIndex]) => aIndex === OTP_QUIZ_QUESTIONS[parseInt(qIndex)].correctIndex
  ).length;
});

function selectAnswer(questionIndex: number, answerIndex: number) {
  answers.value[questionIndex] = answerIndex;
}

function resetQuiz() {
  answers.value = {};
}

function getScoreMessage(): string {
  const percentage = (score.value / OTP_QUIZ_QUESTIONS.length) * 100;
  if (percentage === 100) {
    return 'Perfekt! Du hast das One-Time-Pad vollständig verstanden! 🏆';
  } else if (percentage >= 80) {
    return 'Sehr gut! Du hast die wichtigsten Konzepte verstanden! 🌟';
  } else if (percentage >= 60) {
    return 'Gut gemacht! Lies dir die Erklärungen nochmal durch. 👍';
  } else {
    return 'Nicht schlecht! Versuch es nochmal und lies die Theorie durch. 💪';
  }
}
</script>
